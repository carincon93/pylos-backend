import { Module } from '@nestjs/common'
import { LecturaController } from './lectura.controller'
import { LecturaService } from './lectura.service'

@Module({
    controllers: [LecturaController],
    providers: [LecturaService],
})
export class LecturaModule {}
