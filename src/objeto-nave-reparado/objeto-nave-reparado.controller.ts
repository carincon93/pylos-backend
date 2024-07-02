import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common'
import { ObjetoNaveReparadoService } from './objeto-nave-reparado.service'
import { CreateObjetoNaveReparadoDto } from './dto/create-objeto-nave-reparado.dto'
import { UpdateObjetoNaveReparadoDto } from './dto/update-objeto-nave-reparado.dto'
import { AuthService } from 'src/auth/auth.service'
import { AuthGuard } from 'src/auth/jwt-auth.guard'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

@ApiTags('Objeto nave reparado')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('objeto-nave-reparado')
export class ObjetoNaveReparadoController {
    constructor(
        private readonly authService: AuthService,
        private readonly objetoNaveReparadoService: ObjetoNaveReparadoService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() createObjetoNaveReparadoDto: CreateObjetoNaveReparadoDto) {
        const response = await this.authService.getUserFromToken(req)

        createObjetoNaveReparadoDto.usuarioId = response?.id

        return this.objetoNaveReparadoService.create(createObjetoNaveReparadoDto)
    }

    @Get()
    findAll() {
        return this.objetoNaveReparadoService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.objetoNaveReparadoService.findOne(+id)
    }

    @Get('obtener/por-usuario')
    async findByUser(@Req() req: Request) {
        const response = await this.authService.getUserFromToken(req)

        return this.objetoNaveReparadoService.findByUser(response?.id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateObjetoNaveReparadoDto: UpdateObjetoNaveReparadoDto) {
        return this.objetoNaveReparadoService.update(+id, updateObjetoNaveReparadoDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.objetoNaveReparadoService.remove(+id)
    }
}
