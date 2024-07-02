import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoNaveReparadoController } from './objeto-nave-reparado.controller';
import { ObjetoNaveReparadoService } from './objeto-nave-reparado.service';

describe('ObjetoNaveReparadoController', () => {
  let controller: ObjetoNaveReparadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoNaveReparadoController],
      providers: [ObjetoNaveReparadoService],
    }).compile();

    controller = module.get<ObjetoNaveReparadoController>(ObjetoNaveReparadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
