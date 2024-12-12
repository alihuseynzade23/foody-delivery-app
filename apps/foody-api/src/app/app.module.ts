import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { FilesModule } from './files/files.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ProductModule } from './product/product.module';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_HOST')}:${configService.get(
          'MONGO_PORT',
        )}/${configService.get('MONGO_AUTHDATABASE')}`,
      }),
    }),

    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'single',
        // host: configService.get<string>('REDIS_HOST'),
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT'),
      }),
    }),
    AuthModule,
    CategoryModule,
    FilesModule,
    RestaurantModule,
    ProductModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [RedisModule],
})
export class AppModule {}
