import { Injectable } from '@nestjs/common';
import { CreatePasslookDto } from './dto/create-passlook.dto';
import { UpdatePasslookDto } from './dto/update-passlook.dto';

@Injectable()
export class PasslookService {
  create(createPasslookDto: CreatePasslookDto) {
    return 'This action adds a new passlook';
  }

  findAll() {
    return `This action returns all passlook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passlook`;
  }

  update(id: number, updatePasslookDto: UpdatePasslookDto) {
    return `This action updates a #${id} passlook`;
  }

  remove(id: number) {
    return `This action removes a #${id} passlook`;
  }
}
