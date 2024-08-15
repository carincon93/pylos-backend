import { Injectable } from '@nestjs/common'
import { CreateCalificacionPyloDto } from './dto/create-calificacion-pylo.dto'
import { UpdateCalificacionPyloDto } from './dto/update-calificacion-pylo.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CalificacionPylosService {
    constructor(private prisma: PrismaService) {}

    async create(createCalificacionPyloDto: CreateCalificacionPyloDto) {
        const prevEvaluation = await this.findOne(createCalificacionPyloDto.usuarioId)

        if (prevEvaluation.id) {
            return this.update(prevEvaluation.id, createCalificacionPyloDto)
        } else {
            return this.prisma.calificacionPylos.create({
                data: createCalificacionPyloDto,
            })
        }
    }

    findAll() {
        return `This action returns all calificacionPylos`
    }

    findOne(id: string) {
        return this.prisma.calificacionPylos.findFirst({
            where: {
                usuarioId: id,
            },
        })
    }

    update(id: string, updateCalificacionPyloDto: UpdateCalificacionPyloDto) {
        return this.prisma.calificacionPylos.update({
            where: {
                id,
            },
            data: updateCalificacionPyloDto,
        })
    }

    remove(id: string) {
        return `This action removes a #${id} calificacionPylo`
    }
}
