import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Printer } from './printer.schema';

@Injectable()
export class PrintersService {
  constructor(
    @InjectModel('Printer') private readonly PrinterModel: Model<Printer>,
  ) { }

  async create(createPrinterDto: any): Promise<Printer> {
    const createdPrinter = new this.PrinterModel(createPrinterDto);
    return createdPrinter.save();
  }

  async findAll(): Promise<Printer[]> {
    return this.PrinterModel.find().exec();
  }

  async searchByKeyword(
    keyword: string,
    skip: number,
    pageSize: number,
  ): Promise<Printer[]> {
    const regex = new RegExp(keyword, 'i');
    return this.PrinterModel.find({ name: { $regex: regex } })
      .skip(skip) // 跳过前面的条目
      .limit(pageSize) // 限制返回的数量
      .exec();
  }
}
