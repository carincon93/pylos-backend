import { ApiProperty } from '@nestjs/swagger'

export class CreateObjetoNaveReparadoDto {
    id: string

    @ApiProperty()
    objeto: string

    @ApiProperty()
    planeta: string

    @ApiProperty()
    usuarioId: string
}
