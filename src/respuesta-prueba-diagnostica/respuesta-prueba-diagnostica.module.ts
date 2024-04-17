import { Module } from '@nestjs/common'
import { RespuestaPruebaDiagnosticaService } from './respuesta-prueba-diagnostica.service'
import { RespuestaPruebaDiagnosticaController } from './respuesta-prueba-diagnostica.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthService } from 'src/auth/auth.service'
import { UsuarioService } from 'src/usuario/usuario.service'

@Module({
    controllers: [RespuestaPruebaDiagnosticaController],
    providers: [RespuestaPruebaDiagnosticaService, UsuarioService, AuthService],
    imports: [PrismaModule],
})
export class RespuestaPruebaDiagnosticaModule {}
