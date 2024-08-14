import { PartialType } from '@nestjs/swagger';
import { CreateChatEmojiDto } from './create-chat-emoji.dto';

export class UpdateChatEmojiDto extends PartialType(CreateChatEmojiDto) {}
