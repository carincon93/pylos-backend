import { Module } from '@nestjs/common'
import { ObjetoNaveReparadoService } from './objeto-nave-reparado.service'
import { ObjetoNaveReparadoController } from './objeto-nave-reparado.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
    controllers: [ObjetoNaveReparadoController],
    providers: [ObjetoNaveReparadoService, AuthService],
    imports: [PrismaModule],
})
export class ObjetoNaveReparadoModule {}
