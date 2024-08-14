import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionPylosController } from './calificacion-pylos.controller';
import { CalificacionPylosService } from './calificacion-pylos.service';

describe('CalificacionPylosController', () => {
  let controller: CalificacionPylosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalificacionPylosController],
      providers: [CalificacionPylosService],
    }).compile();

    controller = module.get<CalificacionPylosController>(CalificacionPylosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
