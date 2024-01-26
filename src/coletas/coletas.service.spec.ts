import { Test, TestingModule } from '@nestjs/testing';
import { ColetasService } from './coletas.service';

describe('ColetasService', () => {
  let service: ColetasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColetasService],
    }).compile();

    service = module.get<ColetasService>(ColetasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
