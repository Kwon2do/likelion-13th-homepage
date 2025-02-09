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

// 사용자 정의 타입: Multer의 File 타입을 확장하여 S3 업로드 시 추가되는 location 속성을 포함
/* eslint-disable */
interface MulterS3File extends MulterFile {
  location: string;
}

@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly configService: ConfigService,
  ) {
    // 디버깅용: 환경변수가 제대로 로드되었는지 확인
    console.log('AWS_S3_BUCKET:', process.env.AWS_S3_BUCKET);
  }

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
        acl: 'public-read', // 업로드한 파일을 공개 읽기 가능하도록 설정
        key: (req, file, callback) => {
          const uniqueSuffix = uuidv4();
          const fileExtName = extname(file.originalname);
          callback(null, `${uniqueSuffix}${fileExtName}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: MulterS3File, // 사용자 정의 타입 사용
    @Body() body: Partial<Application>,
  ): Promise<Application> {
    // multer-s3가 업로드에 성공하면 file.location에 S3 URL이 들어옵니다.
    const fileUrl = file ? file.location : null;
    const data: Partial<Application> = {
      ...body,
      portfolio: fileUrl ? fileUrl : undefined,
    };

    const application = await this.applicationsService.createApplication(data);
    console.log('DB에 저장된 데이터:', application);
    return application;
  }
}
