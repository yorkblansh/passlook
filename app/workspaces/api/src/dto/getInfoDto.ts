import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class GetInfoDto {
	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	appPassword: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	department: string

	@IsString()
	@ApiProperty({ required: true, nullable: false })
	// @IsOptional()
	email: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	name: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	password: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	position: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	secondName: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	surname: string

	@IsString()
	@ApiProperty({ required: false, nullable: true })
	@IsOptional()
	platform: string
}
