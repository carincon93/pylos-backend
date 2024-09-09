import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackRespuestaController } from './feedback-respuesta.controller';
import { FeedbackRespuestaService } from './feedback-respuesta.service';

describe('FeedbackRespuestaController', () => {
  let controller: FeedbackRespuestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackRespuestaController],
      providers: [FeedbackRespuestaService],
    }).compile();

    controller = module.get<FeedbackRespuestaController>(FeedbackRespuestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
