import { PartialType } from '@nestjs/swagger';
import { CreateFeedbackRespuestaDto } from './create-feedback-respuesta.dto';

export class UpdateFeedbackRespuestaDto extends PartialType(CreateFeedbackRespuestaDto) {}
