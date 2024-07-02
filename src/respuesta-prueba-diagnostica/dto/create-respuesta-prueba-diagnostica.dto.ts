import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateRespuestaPruebaDiagnosticaDto {
    id: string

    @ApiProperty()
    respuesta: string

    @ApiProperty()
    usuarioId: string

    @ApiProperty()
    opcionPruebaDiagnosticaId: string

    @ApiProperty()
    @IsNotEmpty()
    preguntaPruebaDiagnosticaId: string

    @ApiProperty()
    esRespuestaCorrecta: boolean
}
