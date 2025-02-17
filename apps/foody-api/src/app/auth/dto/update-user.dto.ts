import { IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  contactNumber?: string;

  @IsOptional()
  avatar?: string;
}
