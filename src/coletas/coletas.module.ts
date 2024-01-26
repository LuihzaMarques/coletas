import { Module } from '@nestjs/common';
import { ColetasService } from './coletas.service';
import { ColetasController } from './coletas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ColetasController],
  providers: [ColetasService],
})
export class ColetasModule {}
