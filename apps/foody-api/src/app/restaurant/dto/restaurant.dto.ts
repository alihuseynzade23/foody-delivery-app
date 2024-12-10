import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class RestaurantDto {
  @IsString()
  name: string;

  @IsOptional()
  image?: string;

  // @IsArray()
  @IsString()
  cuisine?: string;

  // @IsNumber()
  price: number;

  // @IsNumber()
  deliveryTime: number;

  @IsString()
  address: string;

  @IsString()
  categoryId: string;
}
