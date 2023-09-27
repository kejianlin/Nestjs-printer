import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
