import { Test, TestingModule } from '@nestjs/testing';
import { ChatEmojisService } from './chat-emojis.service';

describe('ChatEmojisService', () => {
  let service: ChatEmojisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatEmojisService],
    }).compile();

    service = module.get<ChatEmojisService>(ChatEmojisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
