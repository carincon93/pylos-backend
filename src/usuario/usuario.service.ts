import { Injectable } from '@nestjs/common'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    create(createUsuarioDto: CreateUsuarioDto) {
        return this.prisma.usuario.create({
            data: createUsuarioDto,
        })
    }

    findAll() {
        return this.prisma.usuario.findMany({
            orderBy: {
                nombreUsuario: 'asc',
            },
        })
    }

    findOne(id: string) {
        return this.prisma.usuario.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
        return this.prisma.usuario.update({
            where: {
                id,
            },
            data: updateUsuarioDto,
        })
    }

    async remove(id: string) {
        await this.prisma.respuestaPruebaDiagnostica.deleteMany({
            where: { usuarioId: id },
        })

        await this.prisma.objetoNaveReparado.deleteMany({
            where: { usuarioId: id },
        })

        await this.prisma.chatEmojis.deleteMany({
            where: {
                OR: [{ usuario1Id: id }, { usuario2Id: id }],
            },
        })

        await this.prisma.calificacionPylos.deleteMany({
            where: {
                usuarioId: id,
            },
        })

        return this.prisma.usuario.delete({
            where: {
                id,
            },
        })
    }

    async getTablaPosiciones(): Promise<any[]> {
        // Obtener todos los usuarios con sus respuestas y opciones asociadas
        const usuarios = await this.prisma.usuario.findMany({
            include: {
                mascota: true,
                objetoNaveReparado: true,
                respuestaPruebaDiagnostica: {
                    include: {
                        opcionPruebaDiagnostica: true,
                        preguntaPruebaDiagnostica: true,
                    },
                    orderBy: {
                        createdAt: 'asc', // Ordenar las respuestas por createdAt en orden ascendente
                    },
                },
            },
        })

        // Calcular el puntaje de cada usuario
        const tablaPosiciones = usuarios.map((usuario) => {
            const opcionesCorrectas = usuario.respuestaPruebaDiagnostica.filter((respuesta) => respuesta.opcionPruebaDiagnostica?.esOpcionCorrecta === true).length
            const respuestasCorrectas = usuario.respuestaPruebaDiagnostica.filter((respuesta) => respuesta.esRespuestaCorrecta === true).length
            const objetoNaveReparados = usuario.objetoNaveReparado.length
            const puntaje = opcionesCorrectas + respuestasCorrectas + objetoNaveReparados

            const totalRepairTime = usuario.objetoNaveReparado.reduce((total, obj) => total + obj.tiempoRespuesta, 0)

            return {
                usuarioId: usuario.id,
                nombre: usuario.nombre,
                mascotaFoto: usuario.mascota.foto,
                nombreUsuario: usuario.nombreUsuario,
                mascotaNombre: usuario.mascotaNombre,
                grado: usuario.grado,
                colegio: usuario.colegio,
                tiempoPruebaDiagnostica: usuario.tiempoPruebaDiagnostica + totalRepairTime,
                puntaje,
            }
        })

        // Ordenar los usuarios por puntaje en orden descendente
        tablaPosiciones.sort((a, b) => b.puntaje - a.puntaje)

        return tablaPosiciones
    }
}
