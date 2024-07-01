import { Controller, Get } from '@nestjs/common'
import { LecturaService } from './lectura.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Lectura')
@Controller('lectura')
export class LecturaController {
    constructor(private readonly lecturaService: LecturaService) {}

    @Get('anfora')
    getLecturas() {
        return this.lecturaService.getLecturasAnfora()
    }
}
