/* user.module.ts */
import { Module } from '@nestjs/common';
import { PrintersController } from './printer.controller';
import { PrintersService } from './printers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrinterSchema } from './printer.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Printer', schema: PrinterSchema }]),
  ],
  controllers: [PrintersController],
  providers: [PrintersService],
})
export class PrinterModule { }
