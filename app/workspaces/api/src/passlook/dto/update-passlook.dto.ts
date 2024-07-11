import { PartialType } from '@nestjs/swagger';
import { CreatePasslookDto } from './create-passlook.dto';

export class UpdatePasslookDto extends PartialType(CreatePasslookDto) {}
