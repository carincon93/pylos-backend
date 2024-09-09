import { Module } from '@nestjs/common'
import { FeedbackRespuestaService } from './feedback-respuesta.service'
import { FeedbackRespuestaController } from './feedback-respuesta.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
    controllers: [FeedbackRespuestaController],
    providers: [FeedbackRespuestaService, AuthService],
    imports: [PrismaModule],
})
export class FeedbackRespuestaModule {}
