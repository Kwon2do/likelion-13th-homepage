// src/applications/applications.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApplicationsService } from './applications.service';
import { Application } from './applications.entity';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { S3 } from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import { ConfigService } from '@nestjs/config';
import type { File as MulterFile } from 'multer';

// Multer의 File 타입 확장: multer-s3 업로드 후 location 속성이 추가됩니다.
interface MulterS3File extends MulterFile {
  location: string;
}
/* eslint-disable */
@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('portfolio', {
      storage: multerS3({
        s3: new S3({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION,
        }),
        bucket: 'likelion-inu-apply',
        key: (req, file, callback) => {
          const uniqueSuffix = uuidv4();
          const fileExtName = extname(file.originalname);
          callback(null, `${uniqueSuffix}${fileExtName}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: MulterS3File,
    @Body() body: Partial<Application>,
  ): Promise<Application> {
    const fileUrl = file ? file.location : null;
    const data: Partial<Application> = {
      ...body,
      portfolio: fileUrl || undefined,
    };

    const application = await this.applicationsService.createApplication(data);
    console.log('DB에 저장된 데이터:', application);
    return application;
  }
}
