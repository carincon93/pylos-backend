import { Module } from '@nestjs/common'
import { CalificacionPylosService } from './calificacion-pylos.service'
import { CalificacionPylosController } from './calificacion-pylos.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
    controllers: [CalificacionPylosController],
    providers: [CalificacionPylosService, AuthService],
    imports: [PrismaModule],
})
export class CalificacionPylosModule {}
