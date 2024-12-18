import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './restaurant.model';
import { FilesService } from '../files/files.service';
import { ConfigModule } from '@nestjs/config';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchema }]),
    ConfigModule,
    RedisModule,
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, FilesService],
})
export class RestaurantModule {}
