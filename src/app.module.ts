import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsuarioModule } from './usuario/usuario.module'
import { PreguntaSeguridadModule } from './pregunta-seguridad/pregunta-seguridad.module'
import { PreguntaPruebaDiagnosticaModule } from './pregunta-prueba-diagnostica/pregunta-prueba-diagnostica.module'
import { OpcionPruebaDiagnosticaModule } from './opcion-prueba-diagnostica/opcion-prueba-diagnostica.module'
import { RespuestaPruebaDiagnosticaModule } from './respuesta-prueba-diagnostica/respuesta-prueba-diagnostica.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'

// Un nuevo cambio
@Module({
    imports: [UsuarioModule, PreguntaSeguridadModule, PreguntaPruebaDiagnosticaModule, OpcionPruebaDiagnosticaModule, RespuestaPruebaDiagnosticaModule, AuthModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
