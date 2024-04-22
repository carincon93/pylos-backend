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
            take: 10,
            include: {
                opcionPruebaDiagnostica: {
                    select: {
                        id: true,
                        opcion: true,
                        esOpcionCorrecta: true,
                    },
                },
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

    async getPreguntasAleatorias(usuarioId: string) {
        const respuestas = await this.prisma.respuestaPruebaDiagnostica.findMany({
            where: {
                usuarioId: usuarioId,
            },
        })

        // Obtener todas las preguntas disponibles
        const allPreguntas = await this.prisma.preguntaPruebaDiagnostica.findMany({
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
        })

        // Seleccionar aleatoriamente 10 preguntas
        const randomPreguntas = this.getSeleccionAleatoria(allPreguntas, 10 - respuestas.length)

        return randomPreguntas
    }

    // Función para seleccionar aleatoriamente elementos de un array
    getSeleccionAleatoria<T>(array: T[], cantidad: number): T[] {
        const seleccion: T[] = []
        const copiaArray = [...array] // Copiar el array original para no modificarlo

        for (let i = 0; i < cantidad; i++) {
            const indiceAleatorio = Math.floor(Math.random() * copiaArray.length)
            seleccion.push(copiaArray.splice(indiceAleatorio, 1)[0]) // Eliminar y agregar el elemento seleccionado
        }

        return seleccion
    }
}
