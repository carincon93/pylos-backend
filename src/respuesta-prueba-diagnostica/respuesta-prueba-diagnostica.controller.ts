import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Req, UseGuards } from '@nestjs/common/decorators'
import { AuthGuard } from 'src/auth/jwt-auth.guard'
import { AuthService } from 'src/auth/auth.service'
import { UsuarioService } from 'src/usuario/usuario.service'

@ApiTags('Respuesta de prueba diagnóstica')
@Controller('respuesta-prueba-diagnostica')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class RespuestaPruebaDiagnosticaController {
    constructor(
        private readonly authService: AuthService,
        private readonly respuestaPruebaDiagnosticaService: RespuestaPruebaDiagnosticaService,
        private readonly usuarioService: UsuarioService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        const response = await this.authService.getUserFromToken(req)

        createRespuestaPruebaDiagnosticaDto.usuarioId = response?.id
        if (createRespuestaPruebaDiagnosticaDto.respuesta) {
            createRespuestaPruebaDiagnosticaDto.respuesta = createRespuestaPruebaDiagnosticaDto.respuesta.toUpperCase()
        }

        return this.respuestaPruebaDiagnosticaService.create(createRespuestaPruebaDiagnosticaDto)
    }

    @Get()
    findAll() {
        return this.respuestaPruebaDiagnosticaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.respuestaPruebaDiagnosticaService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRespuestaPruebaDiagnosticaDto: UpdateRespuestaPruebaDiagnosticaDto) {
        return this.respuestaPruebaDiagnosticaService.update(id, updateRespuestaPruebaDiagnosticaDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.respuestaPruebaDiagnosticaService.remove(id)
    }

    @Delete(':usuarioId/restablecer-prueba')
    restartPrueba(@Param('usuarioId') usuarioId: string) {
        return this.respuestaPruebaDiagnosticaService.restartPrueba(usuarioId)
    }

    @Get('obtener/tabla-de-posiciones')
    getTablaPosiciones() {
        return this.usuarioService.getTablaPosiciones()
    }
}
