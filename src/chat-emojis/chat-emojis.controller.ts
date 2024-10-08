import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common'
import { ChatEmojisService } from './chat-emojis.service'
import { CreateChatEmojiDto } from './dto/create-chat-emoji.dto'
import { UpdateChatEmojiDto } from './dto/update-chat-emoji.dto'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

@ApiTags('Chat Emojis')
@Controller('chat-emojis')
export class ChatEmojisController {
    constructor(
        private readonly chatEmojisService: ChatEmojisService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() createChatEmojiDto: CreateChatEmojiDto) {
        const response = await this.authService.getUserFromToken(req)

        createChatEmojiDto.usuario1Id = response?.id

        return this.chatEmojisService.create(createChatEmojiDto)
    }

    @Get()
    findAll() {
        return this.chatEmojisService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.chatEmojisService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateChatEmojiDto: UpdateChatEmojiDto) {
        return this.chatEmojisService.update(id, updateChatEmojiDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.chatEmojisService.remove(id)
    }
}
