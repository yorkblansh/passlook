import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from '../prisma/prisma.module'
import { PasslookModule } from './passlook/passlook.module';

@Module({
	imports: [PrismaModule, PasslookModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
