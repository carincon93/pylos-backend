import { Injectable } from '@nestjs/common'
import { CreatePreguntaPruebaDiagnosticaDto } from './dto/create-pregunta-prueba-diagnostica.dto'
import { UpdatePreguntaPruebaDiagnosticaDto } from './dto/update-pregunta-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PreguntaPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    create(createPreguntaPruebaDiagnosticaDto: CreatePreguntaPruebaDiagnosticaDto) {
        return this.prisma.preguntaPruebaDiagnostica.create({
            data: createPreguntaPruebaDiagnosticaDto,
        })
    }

    findAll() {
        return this.prisma.preguntaPruebaDiagnostica.findMany({
            include: {
                opcionPruebaDiagnostica: {
                    select: {
                        id: true,
                        opcion: true,
                        esOpcionCorrecta: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
        })
    }

    findOne(id: string) {
        return this.prisma.preguntaPruebaDiagnostica.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: string, updatePreguntaPruebaDiagnosticaDto: UpdatePreguntaPruebaDiagnosticaDto) {
        return this.prisma.preguntaPruebaDiagnostica.update({
            where: {
                id,
            },
            data: updatePreguntaPruebaDiagnosticaDto,
        })
    }

    remove(id: string) {
        return this.prisma.preguntaPruebaDiagnostica.delete({
            where: {
                id,
            },
        })
    }

    async getPreguntasPorUsuario(usuarioId: string) {
        // Obtener todas las preguntas disponibles
        return await this.prisma.preguntaPruebaDiagnostica.findMany({
            where: {
                NOT: {
                    respuestaPruebaDiagnostica: {
                        some: {
                            usuarioId: usuarioId,
                        },
                    },
                },
            },
            include: {
                opcionPruebaDiagnostica: {
                    select: {
                        id: true,
                        opcion: true,
                        esOpcionCorrecta: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
        })
    }
}
