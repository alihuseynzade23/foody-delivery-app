import { IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  login: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  role?: string;
}
