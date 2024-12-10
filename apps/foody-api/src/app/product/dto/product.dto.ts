import { IsOptional, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  description: string;

  price: number;

  @IsString()
  restaurantId: string;
}
