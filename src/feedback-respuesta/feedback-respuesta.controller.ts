import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { FeedbackRespuestaService } from './feedback-respuesta.service'
import { CreateFeedbackRespuestaDto } from './dto/create-feedback-respuesta.dto'
import { UpdateFeedbackRespuestaDto } from './dto/update-feedback-respuesta.dto'
import { AuthGuard } from 'src/auth/jwt-auth.guard'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

@ApiTags('Feedback Respuesta')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('feedback-respuesta')
export class FeedbackRespuestaController {
    constructor(
        private readonly feedbackRespuestaService: FeedbackRespuestaService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() createFeedbackRespuestaDto: CreateFeedbackRespuestaDto) {
        const response = await this.authService.getUserFromToken(req)

        createFeedbackRespuestaDto.usuarioId = response?.id

        return this.feedbackRespuestaService.create(createFeedbackRespuestaDto)
    }

    @Get()
    findAll() {
        return this.feedbackRespuestaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.feedbackRespuestaService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFeedbackRespuestaDto: UpdateFeedbackRespuestaDto) {
        return this.feedbackRespuestaService.update(+id, updateFeedbackRespuestaDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.feedbackRespuestaService.remove(+id)
    }
}
