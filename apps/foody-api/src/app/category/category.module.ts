import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { FilesService } from '../files/files.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]), ConfigModule],
  controllers: [CategoryController],
  providers: [CategoryService, FilesService],
})
export class CategoryModule {}
