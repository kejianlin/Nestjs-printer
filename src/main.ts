import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors'; // 引入 cors 中间件
// const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // 使用 cors 中间件

  await app.listen(3000);
}
bootstrap();
