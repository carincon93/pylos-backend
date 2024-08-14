import { Test, TestingModule } from '@nestjs/testing';
import { ChatEmojisController } from './chat-emojis.controller';
import { ChatEmojisService } from './chat-emojis.service';

describe('ChatEmojisController', () => {
  let controller: ChatEmojisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatEmojisController],
      providers: [ChatEmojisService],
    }).compile();

    controller = module.get<ChatEmojisController>(ChatEmojisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
