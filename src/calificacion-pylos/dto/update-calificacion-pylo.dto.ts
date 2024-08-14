import { PartialType } from '@nestjs/swagger';
import { CreateCalificacionPyloDto } from './create-calificacion-pylo.dto';

export class UpdateCalificacionPyloDto extends PartialType(CreateCalificacionPyloDto) {}
