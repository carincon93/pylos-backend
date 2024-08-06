import { Injectable } from '@nestjs/common'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RespuestaPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    async create(createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        const respuestasPruebaDiagnostica = await this.prisma.respuestaPruebaDiagnostica.findMany({
            where: {
                usuarioId: createRespuestaPruebaDiagnosticaDto.usuarioId,
            },
        })

        if (respuestasPruebaDiagnostica.length == (await this.prisma.preguntaPruebaDiagnostica.count())) {
            await this.prisma.usuario.update({
                where: {
                    id: createRespuestaPruebaDiagnosticaDto.usuarioId,
                },
                data: {
                    pruebaDiagnosticaCompleta: true,
                },
            })
        }

        return this.prisma.respuestaPruebaDiagnostica.create({
            data: createRespuestaPruebaDiagnosticaDto,
        })
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
        await this.prisma.usuario.update({
            where: {
                id: usuarioId,
            },
            data: {
                tiempoPruebaDiagnostica: null,
                introduccionCompleta: false,
                pruebaDiagnosticaCompleta: false,
            },
        })

        return await this.prisma.respuestaPruebaDiagnostica.deleteMany({
            where: {
                usuarioId: usuarioId,
            },
        })
    }
}
