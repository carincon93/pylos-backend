import { Module } from '@nestjs/common'
import { ChatEmojisService } from './chat-emojis.service'
import { ChatEmojisController } from './chat-emojis.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
    controllers: [ChatEmojisController],
    providers: [ChatEmojisService, AuthService],
    imports: [PrismaModule],
})
export class ChatEmojisModule {}
