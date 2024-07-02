import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsuarioModule } from './usuario/usuario.module'
import { PreguntaPruebaDiagnosticaModule } from './pregunta-prueba-diagnostica/pregunta-prueba-diagnostica.module'
import { OpcionPruebaDiagnosticaModule } from './opcion-prueba-diagnostica/opcion-prueba-diagnostica.module'
import { RespuestaPruebaDiagnosticaModule } from './respuesta-prueba-diagnostica/respuesta-prueba-diagnostica.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { MascotaModule } from './mascota/mascota.module'
import { LecturaModule } from './lectura/lectura.module'
import { I18nModule, AcceptLanguageResolver, QueryResolver } from 'nestjs-i18n'
import { ObjetoNaveReparadoModule } from './objeto-nave-reparado/objeto-nave-reparado.module'
import * as path from 'path'

@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'es',
            loaderOptions: {
                path: path.join(__dirname, '/i18n/'),
                watch: true,
            },
            resolvers: [{ use: QueryResolver, options: ['lang', 'locale', 'l'] }, AcceptLanguageResolver],
        }),
        ConfigModule.forRoot(),
        UsuarioModule,
        PreguntaPruebaDiagnosticaModule,
        OpcionPruebaDiagnosticaModule,
        RespuestaPruebaDiagnosticaModule,
        LecturaModule,
        MascotaModule,
        AuthModule,
        PrismaModule,
        ObjetoNaveReparadoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
