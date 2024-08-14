import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateCalificacionPyloDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    calificacion: string

    @ApiProperty()
    usuarioId: string
}
