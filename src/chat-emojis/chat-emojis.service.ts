import { Injectable } from '@nestjs/common'
import { CreateChatEmojiDto } from './dto/create-chat-emoji.dto'
import { UpdateChatEmojiDto } from './dto/update-chat-emoji.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ChatEmojisService {
    constructor(private prisma: PrismaService) {}

    create(createChatEmojiDto: CreateChatEmojiDto) {
        return this.prisma.chatEmojis.create({
            data: createChatEmojiDto,
        })
    }

    findAll() {
        return `This action returns all chatEmojis`
    }

    findOne(id: number) {
        return `This action returns a #${id} chatEmoji`
    }

    update(id: number, updateChatEmojiDto: UpdateChatEmojiDto) {
        return `This action updates a #${id} chatEmoji`
    }

    remove(id: number) {
        return `This action removes a #${id} chatEmoji`
    }
}
