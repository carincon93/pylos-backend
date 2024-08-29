import { ApiProperty } from '@nestjs/swagger'

export class CreateObjetoNaveReparadoDto {
    id: string

    @ApiProperty()
    objeto: string

    @ApiProperty()
    planeta: string

    @ApiProperty()
    tiempoRespuesta: number

    @ApiProperty()
    sesion: number

    @ApiProperty()
    usuarioId: string
}
