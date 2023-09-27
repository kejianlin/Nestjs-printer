import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrinterModule } from './printer/printer.module';

// import { PrintersModule } from './printer/printer.model';

// 引入 Mongoose
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PrinterModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/printer'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
