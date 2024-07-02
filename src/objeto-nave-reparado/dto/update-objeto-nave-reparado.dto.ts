import { PartialType } from '@nestjs/swagger';
import { CreateObjetoNaveReparadoDto } from './create-objeto-nave-reparado.dto';

export class UpdateObjetoNaveReparadoDto extends PartialType(CreateObjetoNaveReparadoDto) {}
