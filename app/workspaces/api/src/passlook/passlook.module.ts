import { Module } from '@nestjs/common'
import { PasslookService } from './passlook.service'
import { PasslookController } from './passlook.controller'
import { PrismaModule } from '../../prisma/prisma.module'

@Module({
	imports: [PrismaModule],
	controllers: [PasslookController],
	providers: [PasslookService],
})
export class PasslookModule {}
