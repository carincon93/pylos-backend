import { Injectable } from '@nestjs/common'
import { CreateFeedbackRespuestaDto } from './dto/create-feedback-respuesta.dto'
import { UpdateFeedbackRespuestaDto } from './dto/update-feedback-respuesta.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class FeedbackRespuestaService {
    constructor(private prisma: PrismaService) {}

    create(createFeedbackRespuestaDto: CreateFeedbackRespuestaDto) {
        return this.prisma.feedbackRespuesta.create({
            data: createFeedbackRespuestaDto,
        })
    }

    findAll() {
        return `This action returns all feedbackRespuesta`
    }

    findOne(id: number) {
        return `This action returns a #${id} feedbackRespuesta`
    }

    update(id: number, updateFeedbackRespuestaDto: UpdateFeedbackRespuestaDto) {
        return `This action updates a #${id} feedbackRespuesta`
    }

    remove(id: number) {
        return `This action removes a #${id} feedbackRespuesta`
    }
}
