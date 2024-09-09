import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackRespuestaService } from './feedback-respuesta.service';

describe('FeedbackRespuestaService', () => {
  let service: FeedbackRespuestaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbackRespuestaService],
    }).compile();

    service = module.get<FeedbackRespuestaService>(FeedbackRespuestaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
