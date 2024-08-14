import { Test, TestingModule } from '@nestjs/testing';
import { CalificacionPylosService } from './calificacion-pylos.service';

describe('CalificacionPylosService', () => {
  let service: CalificacionPylosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalificacionPylosService],
    }).compile();

    service = module.get<CalificacionPylosService>(CalificacionPylosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
