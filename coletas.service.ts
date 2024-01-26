import { Injectable } from '@nestjs/common';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { UpdateColetaDto } from './dto/update-coleta.dto';

@Injectable()
export class ColetasService {
  create(createColetaDto: CreateColetaDto) {
    return 'This action adds a new coleta';
  }

  findAll() {
    return `This action returns all coletas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coleta`;
  }

  update(id: number, updateColetaDto: UpdateColetaDto) {
    return `This action updates a #${id} coleta`;
  }

  remove(id: number) {
    return `This action removes a #${id} coleta`;
  }
}
