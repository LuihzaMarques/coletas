import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import { Prisma } from "@prisma/client";

const jsonModel = {
    plastico: 10.0,
    papel: 20.0, 
    metal: 5.0,
    vidro: 12.0,
    naoReciclavel: 100.0,
}

export class CreateColetaDto {
  @ApiProperty({ example: jsonModel})
  @IsNotEmpty()
  infoColeta: Prisma.InputJsonObject;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  clienteId: number;
}
