import { Injectable } from '@nestjs/common'
import { CreateChatEmojiDto } from './dto/create-chat-emoji.dto'
import { UpdateChatEmojiDto } from './dto/update-chat-emoji.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { validate as validateUUID } from 'uuid'

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

    findOne(id: string) {
        return this.prisma.chatEmojis.findFirst({
            include: { usuario1: true },
            where: {
                usuario2Id: String(id),
                visualizado: false,
            },
        })
    }

    update(id: string, updateChatEmojiDto: UpdateChatEmojiDto) {
        return this.prisma.chatEmojis.update({
            where: {
                id,
            },
            data: updateChatEmojiDto,
        })
    }

    remove(id: string) {
        return `This action removes a #${id} chatEmoji`
    }
}
