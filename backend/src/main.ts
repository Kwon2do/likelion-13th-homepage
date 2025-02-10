// src/main.ts
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//import * as crypto from 'crypto';
//(global as any).crypto = crypto;
import { webcrypto } from 'crypto';
(globalThis as any).crypto = webcrypto;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [/https:\/\/.*likelion-inu\.com$/, 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
