import { Injectable } from '@nestjs/common'
import { CreateRespuestaPruebaDiagnosticaDto } from './dto/create-respuesta-prueba-diagnostica.dto'
import { UpdateRespuestaPruebaDiagnosticaDto } from './dto/update-respuesta-prueba-diagnostica.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RespuestaPruebaDiagnosticaService {
    constructor(private prisma: PrismaService) {}

    create(createRespuestaPruebaDiagnosticaDto: CreateRespuestaPruebaDiagnosticaDto) {
        return this.prisma.respuestaPruebaDiagnostica.create({
            data: createRespuestaPruebaDiagnosticaDto,
        })
    }

    findAll() {
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
}
