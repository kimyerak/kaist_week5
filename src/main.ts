import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const cron = require('node-cron');

import { ArticleService } from './article/article.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const articleService = app.get(ArticleService);

  // CORS 설정 추가
  app.enableCors({
    origin: '*', // 모든 출처를 허용합니다. 필요에 따라 특정 출처로 변경할 수 있습니다.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('API for NewsQrab')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger 문서 URL을 '/api'로 설정

  // cron.schedule('* * * * *', async () => {
    console.log('Running a task every midnight');
    const news = await articleService.fetchNews();
    // console.log(news);
  // }, {
  //   scheduled: true,
  //   timezone: "Asia/Seoul"
  // });

  await app.listen(3000);
}
bootstrap();
