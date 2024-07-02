import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoNaveReparadoService } from './objeto-nave-reparado.service';

describe('ObjetoNaveReparadoService', () => {
  let service: ObjetoNaveReparadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoNaveReparadoService],
    }).compile();

    service = module.get<ObjetoNaveReparadoService>(ObjetoNaveReparadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
