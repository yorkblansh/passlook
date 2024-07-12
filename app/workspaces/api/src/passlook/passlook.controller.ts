import { Controller, Get, Post, Body } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { pipe } from 'fp-ts/lib/function'
import path, { join } from 'path'
import { readFileAsync } from '../utils/readFileAsync'
import { GetInfoDto } from '../dto/getInfoDto'
import { CreateInfoDto } from '../dto/createInfoDto'

@Controller('passlook')
export class PasslookController {
	constructor(private readonly prismaService: PrismaService) {}

	@Get('/')
	getHello() {
		return pipe(
			join(process.cwd(), '..', 'react', 'dist', 'index.html'),
			path.resolve,
			readFileAsync,
		)
	}

	@Post('/get_user_info')
	async getUserInfo(@Body() getInfoDto: GetInfoDto) {
		const user = await this.prismaService.user.findMany({
			where: {
				...getInfoDto,
				platform: { name: getInfoDto.platform },
			},
			include: {
				platform: true,
			},
		})

		return user
	}

	@Post('/get_all_user_info')
	async getAllUserInfo() {
		const users = await this.prismaService.user.findMany({
			include: {
				platform: true,
			},
		})

		return users
	}

	@Post('/create_user_info')
	async createUserInfo(@Body() getInfoDto: CreateInfoDto) {
		const { platform, ...rest } = getInfoDto

		const createdUser = await this.prismaService.user.create({
			data: {
				platform: {
					connectOrCreate: {
						where: { name: platform },
						create: { name: platform },
					},
				},
				...rest,
			},
		})

		return createdUser
	}

	@Post('/create_platform')
	createPlatform(@Body() body: { platformName: string }) {
		this.prismaService.platform.create({
			data: {
				name: body.platformName,
			},
		})
	}
}
