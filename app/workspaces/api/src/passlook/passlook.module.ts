import { Module } from '@nestjs/common';
import { PasslookService } from './passlook.service';
import { PasslookController } from './passlook.controller';

@Module({
  controllers: [PasslookController],
  providers: [PasslookService]
})
export class PasslookModule {}
