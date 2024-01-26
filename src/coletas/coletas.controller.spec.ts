import { Test, TestingModule } from '@nestjs/testing';
import { ColetasController } from './coletas.controller';
import { ColetasService } from './coletas.service';

describe('ColetasController', () => {
  let controller: ColetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColetasController],
      providers: [ColetasService],
    }).compile();

    controller = module.get<ColetasController>(ColetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
