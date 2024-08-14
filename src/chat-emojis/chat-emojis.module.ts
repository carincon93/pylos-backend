import { Module } from '@nestjs/common'
import { ChatEmojisService } from './chat-emojis.service'
import { ChatEmojisController } from './chat-emojis.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [ChatEmojisController],
    providers: [ChatEmojisService],
    imports: [PrismaModule],
})
export class ChatEmojisModule {}
