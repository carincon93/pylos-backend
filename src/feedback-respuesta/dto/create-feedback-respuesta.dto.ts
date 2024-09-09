import { ApiProperty } from '@nestjs/swagger'

export class CreateFeedbackRespuestaDto {
    id: string

    @ApiProperty()
    lecturaId: string

    @ApiProperty()
    preguntaId: string

    @ApiProperty()
    respuestaId: string

    @ApiProperty()
    sesion: number

    @ApiProperty()
    usuarioId: string
}
