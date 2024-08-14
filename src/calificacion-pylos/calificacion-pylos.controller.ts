import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common'
import { CalificacionPylosService } from './calificacion-pylos.service'
import { CreateCalificacionPyloDto } from './dto/create-calificacion-pylo.dto'
import { UpdateCalificacionPyloDto } from './dto/update-calificacion-pylo.dto'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/auth/auth.service'

@ApiTags('Calificación Pylos')
@Controller('calificacion-pylos')
export class CalificacionPylosController {
    constructor(
        private readonly calificacionPylosService: CalificacionPylosService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() createCalificacionPyloDto: CreateCalificacionPyloDto) {
        const response = await this.authService.getUserFromToken(req)

        createCalificacionPyloDto.usuarioId = response?.id

        return this.calificacionPylosService.create(createCalificacionPyloDto)
    }

    @Get()
    findAll() {
        return this.calificacionPylosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.calificacionPylosService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCalificacionPyloDto: UpdateCalificacionPyloDto) {
        return this.calificacionPylosService.update(id, updateCalificacionPyloDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.calificacionPylosService.remove(id)
    }
}
