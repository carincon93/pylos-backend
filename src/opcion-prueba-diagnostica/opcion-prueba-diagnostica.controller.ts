import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { OpcionPruebaDiagnosticaService } from './opcion-prueba-diagnostica.service'
import { CreateOpcionPruebaDiagnosticaDto } from './dto/create-opcion-prueba-diagnostica.dto'
import { UpdateOpcionPruebaDiagnosticaDto } from './dto/update-opcion-prueba-diagnostica.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UseGuards } from '@nestjs/common/decorators'
import { AuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Opción de prueba diagnóstica')
@Controller('opcion-prueba-diagnostica')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
export class OpcionPruebaDiagnosticaController {
    constructor(private readonly opcionPruebaDiagnosticaService: OpcionPruebaDiagnosticaService) {}

    @Post()
    create(@Body() createOpcionPruebaDiagnosticaDto: CreateOpcionPruebaDiagnosticaDto) {
        return this.opcionPruebaDiagnosticaService.create(createOpcionPruebaDiagnosticaDto)
    }

    @Get()
    findAll() {
        return this.opcionPruebaDiagnosticaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.opcionPruebaDiagnosticaService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOpcionPruebaDiagnosticaDto: UpdateOpcionPruebaDiagnosticaDto) {
        return this.opcionPruebaDiagnosticaService.update(id, updateOpcionPruebaDiagnosticaDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.opcionPruebaDiagnosticaService.remove(id)
    }
}
