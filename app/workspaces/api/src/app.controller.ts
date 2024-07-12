import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { pipe } from 'fp-ts/lib/function'
import path, { join } from 'path'
import { readFileAsync } from './utils/readFileAsync'
import { PrismaService } from '../prisma/prisma.service'
import { GetInfoDto } from './dto/getInfoDto'
import { CreateInfoDto } from './dto/createInfoDto'

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly prismaService: PrismaService,
	) {}

	@Get('/')
	// @Redirect('http://localhost/api', 301)
	getHello() {
		return pipe(
			join(process.cwd(), '..', 'react', 'dist', 'index.html'),
			path.resolve,
			readFileAsync,
		)
	}

	// @Post('/get_user_info')
	// async getUserInfo(@Body() getInfoDto: GetInfoDto) {
	// 	const user = await this.prismaService.user.findMany({
	// 		where: {
	// 			...getInfoDto,
	// 		},
	// 	})

	// 	return user
	// }

	// @Post('/get_all_user_info')
	// async getAllUserInfo() {
	// 	const users = await this.prismaService.user.findMany({})

	// 	return users
	// }

	// @Post('/create_user_info')
	// async createUserInfo(@Body() getInfoDto: CreateInfoDto) {
	// 	const createdUser = await this.prismaService.user.create({
	// 		data: {
	// 			...getInfoDto,
	// 		},
	// 	})

	// 	return createdUser
	// }
}
