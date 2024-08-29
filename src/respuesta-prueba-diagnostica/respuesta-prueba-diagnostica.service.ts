import { Injectable } from '@nestjs/common'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RespuestaPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    async create(createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        // Obtén todas las respuestas de la prueba diagnóstica del usuario
        const respuestasPruebaDiagnostica = await this.prisma.respuestaPruebaDiagnostica.findMany({
            where: {
                usuarioId: createRespuestaPruebaDiagnosticaDto.usuarioId,
            },
        })

        // Crea una nueva respuesta para la prueba diagnóstica
        await this.prisma.respuestaPruebaDiagnostica.create({
            data: createRespuestaPruebaDiagnosticaDto,
        })

        // Verifica si el número de respuestas del usuario es igual al número de preguntas en la prueba diagnóstica
        const totalPreguntas = await this.prisma.preguntaPruebaDiagnostica.count()
        if (respuestasPruebaDiagnostica.length + 1 === totalPreguntas) {
            // Actualiza el usuario indicando que la prueba diagnóstica está completa
            await this.prisma.usuario.update({
                where: {
                    id: createRespuestaPruebaDiagnosticaDto.usuarioId,
                },
                data: {
                    pruebaDiagnosticaCompleta: true,
                },
            })
        }

        return
    }

    async findAll() {
        return this.prisma.respuestaPruebaDiagnostica.findMany({
            include: {
                usuario: {
                    select: {
                        nombre: true,
                    },
                },
                preguntaPruebaDiagnostica: {
                    select: {
                        pregunta: true,
                        esPreguntaCerrada: true,
                    },
                },
                opcionPruebaDiagnostica: {
                    select: {
                        opcion: true,
                        esOpcionCorrecta: true,
                        respuestaPruebaDiagnostica: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
        })
    }

    findOne(id: string) {
        return this.prisma.respuestaPruebaDiagnostica.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updateRespuestaPruebaDiagnosticaDto: UpdateRespuestaPruebaDiagnosticaDto) {
        return this.prisma.respuestaPruebaDiagnostica.update({
            where: {
                id,
            },
            data: updateRespuestaPruebaDiagnosticaDto,
        })
    }

    remove(id: string) {
        return this.prisma.respuestaPruebaDiagnostica.delete({
            where: {
                id,
            },
        })
    }

    async restartPrueba(usuarioId: string) {
        const usuario = await this.prisma.usuario.findFirst({
            where: { id: usuarioId },
        })

        return await this.prisma.usuario.update({
            where: {
                id: usuarioId,
            },
            data: {
                tiempoPruebaDiagnostica: null,
                introduccionCompleta: false,
                pruebaDiagnosticaCompleta: false,
                sesionPruebaDiagnostica: usuario.sesionPruebaDiagnostica + 1,
            },
        })

        // return await this.prisma.respuestaPruebaDiagnostica.deleteMany({
        //     where: {
        //         usuarioId: usuarioId,
        //     },
        // })
    }
}
