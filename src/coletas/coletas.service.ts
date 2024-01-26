import { Get, Injectable } from '@nestjs/common';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { UpdateColetaDto } from './dto/update-coleta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColetasService {

  constructor(private prisma: PrismaService) {}


  create(createColetaDto: CreateColetaDto) {
    return this.prisma.coleta.create({data: createColetaDto});
  }

  findAll() {
    return this.prisma.coleta.findMany;
  }

 // findOne(id: number) {
 //   return `This action returns a #${id} coleta`;
 // }

  update(id: number, updateColetaDto: UpdateColetaDto) {
    return this.prisma.coleta.update({
      where: {id},
      data: updateColetaDto
    });
  }

  getClients(){
    return this.prisma.cliente.findFirst({
      include:{
        coletas:true,
      },
    });
  }

//  remove(id: number) {
//    return `This action removes a #${id} coleta`;
//  }
}
