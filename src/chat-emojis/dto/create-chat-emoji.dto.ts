import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateChatEmojiDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    emoji: string

    @ApiProperty()
    usuario1Id: string

    @ApiProperty()
    usuario2Id: string
}
