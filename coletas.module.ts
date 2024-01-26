import { Module } from '@nestjs/common';
import { ColetasService } from './coletas.service';
import { ColetasController } from './coletas.controller';

@Module({
  controllers: [ColetasController],
  providers: [ColetasService],
})
export class ColetasModule {}
