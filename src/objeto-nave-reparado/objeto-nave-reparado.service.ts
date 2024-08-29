import { Injectable } from '@nestjs/common'
import { CreateObjetoNaveReparadoDto } from './dto/create-objeto-nave-reparado.dto'
import { UpdateObjetoNaveReparadoDto } from './dto/update-objeto-nave-reparado.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ObjetoNaveReparadoService {
    constructor(private prisma: PrismaService) {}

    async create(createObjetoNaveReparadoDto: CreateObjetoNaveReparadoDto) {
        const objectExist = await this.prisma.objetoNaveReparado.findFirst({
            where: {
                objeto: createObjetoNaveReparadoDto.objeto,
                usuarioId: createObjetoNaveReparadoDto.usuarioId,
                planeta: createObjetoNaveReparadoDto.planeta,
                sesion: createObjetoNaveReparadoDto.sesion,
            },
        })

        if (!objectExist && createObjetoNaveReparadoDto.objeto) {
            return this.prisma.objetoNaveReparado.create({
                data: createObjetoNaveReparadoDto,
            })
        }

        return true
    }

    findAll() {
        return `This action returns all objetoNaveReparado`
    }

    findOne(id: number) {
        return `This action returns a #${id} objetoNaveReparado`
    }

    async findByUser(id: string) {
        const usuario = await this.prisma.usuario.findFirst({
            where: {
                id: id,
            },
        })

        return this.prisma.objetoNaveReparado.findMany({
            where: {
                usuarioId: id,
                sesion: usuario.sesion,
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
