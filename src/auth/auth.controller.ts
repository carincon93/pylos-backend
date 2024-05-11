import { Controller, Post, Body, Res, HttpException, HttpStatus, UseFilters } from '@nestjs/common'
import { LoginAuthDto } from './dto/login-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegistroAuthDto } from './dto/registro-auth.dto'

interface ExtendedResponse extends Response {
    cookie(name: string, value: any, options?: any): any
    clearCookie(name: string, options?: any): any
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private jwtService: JwtService,
        private readonly prisma: PrismaService,
    ) {}

    @Post('login')
    async login(@Res({ passthrough: true }) res: Response, @Body() loginAuthDto: LoginAuthDto) {
        const { nombreUsuario, mascotaNombre } = loginAuthDto

        const findUser = await this.prisma.usuario.findFirst({
            where: { nombreUsuario: nombreUsuario.toLowerCase(), mascotaNombre: mascotaNombre.toLowerCase() },
        })

        if (!findUser) {
            // Si no se encuentra el usuario, devolver un error 400 con un mensaje personalizado
            throw new HttpException('Credenciales inválidas', HttpStatus.BAD_REQUEST)
        }

        // Si se encuentra el usuario, generar el token JWT
        const payload = {
            id: findUser.id,
            nombre: findUser.nombre,
            nombreUsuario: findUser.nombreUsuario,
            edad: findUser.edad,
            grado: findUser.grado,
            colegio: findUser.colegio,
            mascotaId: findUser.mascotaId,
            mascotaNombre: findUser.mascotaNombre,
        }
        const token = this.jwtService.sign(payload)

        // Devolver el usuario y el token en el cuerpo de la respuesta
        return res.status(HttpStatus.OK).json({ user: findUser, token })
    }

    @Post('register')
    async register(@Res({ passthrough: true }) res: ExtendedResponse, @Body() registroAuthDto: RegistroAuthDto) {
        // Verificar si el nombre de usuario ya existe
        const existingUser = await this.prisma.usuario.findFirst({ where: { nombreUsuario: registroAuthDto.nombreUsuario } })

        if (existingUser) {
            throw new HttpException('El nombre de usuario ya ha sido tomado', HttpStatus.BAD_REQUEST)
        }

        const createdUser = await this.prisma.usuario.create({
            data: {
                nombre: registroAuthDto.nombre,
                nombreUsuario: registroAuthDto.nombreUsuario,
                grado: registroAuthDto.grado,
                edad: +registroAuthDto.edad,
                colegio: registroAuthDto.colegio,
                mascotaId: registroAuthDto.mascotaId,
                mascotaNombre: registroAuthDto.mascotaNombre,
            },
        })

        let payload = {}

        if (createdUser) {
            payload = {
                id: createdUser.id,
                nombre: createdUser.nombre,
                edad: createdUser.edad,
                grado: createdUser.grado,
                colegio: createdUser.colegio,
                mascotaId: createdUser.mascotaId,
                mascotaNombre: createdUser.mascotaNombre,
            }

            const token = this.jwtService.sign(payload)

            // Set the JWT token as a cookie in the response
            // res.cookie('accessToken', token, {
            //     domain: process.env.NEXTJS_PUBLIC_DOMAIN, // Use the correct frontend domain here
            //     sameSite: 'none',
            //     httpOnly: true,
            //     secure: true,
            // })

            return { user: createdUser, token }
        }

        return null
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: ExtendedResponse) {
        // Eliminar la cookie que contiene el token de acceso
        res.clearCookie('accessToken')

        // Devolver una respuesta indicando que el logout fue exitoso
        return { message: 'Logout exitoso' }
    }
}
