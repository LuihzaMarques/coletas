import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColetasService } from './coletas.service';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { UpdateColetaDto } from './dto/update-coleta.dto';

@Controller('coletas')
export class ColetasController {
  constructor(private readonly coletasService: ColetasService) {}

  @Post()
  create(@Body() createColetaDto: CreateColetaDto) {
    return this.coletasService.create(createColetaDto);
  }

  @Get()
  findAll() {
    return this.coletasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coletasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColetaDto: UpdateColetaDto) {
    return this.coletasService.update(+id, updateColetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coletasService.remove(+id);
  }
}
