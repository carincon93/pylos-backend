import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { UsuarioService } from 'src/usuario/usuario.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
    controllers: [AuthController],
    providers: [AuthService, UsuarioService, JwtStrategy],
    imports: [
        PrismaModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
    ],
})
export class AuthModule {}
