import { Injectable } from '@nestjs/common'
import { CreateObjetoNaveReparadoDto } from './dto/create-objeto-nave-reparado.dto'
import { UpdateObjetoNaveReparadoDto } from './dto/update-objeto-nave-reparado.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ObjetoNaveReparadoService {
    constructor(private prisma: PrismaService) {}

    create(createObjetoNaveReparadoDto: CreateObjetoNaveReparadoDto) {
        return this.prisma.objetoNaveReparado.create({
            data: createObjetoNaveReparadoDto,
        })
    }

    findAll() {
        return `This action returns all objetoNaveReparado`
    }

    findOne(id: number) {
        return `This action returns a #${id} objetoNaveReparado`
    }

    findByUser(id: string) {
        return this.prisma.objetoNaveReparado.findMany({
            where: {
                usuarioId: id,
            },
        })
    }

    update(id: number, updateObjetoNaveReparadoDto: UpdateObjetoNaveReparadoDto) {
        return `This action updates a #${id} objetoNaveReparado`
    }

    remove(id: number) {
        return `This action removes a #${id} objetoNaveReparado`
    }
}
