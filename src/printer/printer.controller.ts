import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { Printer } from './printer.schema';

@Controller('printers')
export class PrintersController {
  constructor(private readonly printersService: PrintersService) { }

  @Post()
  async create(@Body() createPrinterDto: Printer): Promise<Printer> {
    return this.printersService.create(createPrinterDto);
  }

  @Get()
  async findAll(): Promise<Printer[]> {
    return this.printersService.findAll();
  }

  @Get('search')
  async search(
    @Query('keyword') keyword: string,
    @Query('page') page = 1, // 默认页码为 1
    @Query('pageSize') pageSize = 100, // 默认每页数量为 1000
  ): Promise<Printer[]> {
    const skip = (page - 1) * pageSize; // 计算跳过的条目数
    const printers = await this.printersService.searchByKeyword(
      keyword,
      skip,
      pageSize,
    );
    return printers;
  }
}
