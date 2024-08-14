import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ChatEmojisService } from './chat-emojis.service'
import { CreateChatEmojiDto } from './dto/create-chat-emoji.dto'
import { UpdateChatEmojiDto } from './dto/update-chat-emoji.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Chat Emojis')
@Controller('chat-emojis')
export class ChatEmojisController {
    constructor(private readonly chatEmojisService: ChatEmojisService) {}

    @Post()
    create(@Body() createChatEmojiDto: CreateChatEmojiDto) {
        return this.chatEmojisService.create(createChatEmojiDto)
    }

    @Get()
    findAll() {
        return this.chatEmojisService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.chatEmojisService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateChatEmojiDto: UpdateChatEmojiDto) {
        return this.chatEmojisService.update(+id, updateChatEmojiDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.chatEmojisService.remove(+id)
    }
}
