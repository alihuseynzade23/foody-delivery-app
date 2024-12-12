import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.model';
import { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { NotFoundException } from '@nestjs/common';
import { CATEGORY_NOT_FOUND_ERROR, EXISTING_CATEGORY_ERROR } from './category.constants';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async createCategory(dto: CategoryDto): Promise<CategoryDocument> {
    const existingCategory = await this.categoryModel.findOne({ name: dto.name });
    if (existingCategory) {
      throw new Error(EXISTING_CATEGORY_ERROR);
    }
    return await new this.categoryModel(dto).save();
  }

  async getCategoryById(id: string) {
    const redisKey = `category:${id}`;
    const cachedCategory = await this.redis.get(redisKey);
    if (cachedCategory) {
      return JSON.parse(cachedCategory);
    }

    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    await this.redis.set(redisKey, JSON.stringify(category), 'EX', 60 * 60);
    return category;
  }

  async getAllCategories() {
    const redisKey = 'all_categories';
    const cachedCategories = await this.redis.get(redisKey);
    if (cachedCategories) {
      return JSON.parse(cachedCategories);
    }
    const categories = await this.categoryModel.find().exec();
    await this.redis.set(redisKey, JSON.stringify(categories), 'EX', 60 * 60);
    return categories;
  }

  async updateCategory(id: string, dto: CategoryDto) {
    const updatedCategory = await this.categoryModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updatedCategory) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    const redisKey = `category:${id}`;
    await this.redis.set(redisKey, JSON.stringify(updatedCategory), 'EX', 60 * 60);
    return updatedCategory;
  }

  async deleteCategory(id: string) {
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id).exec();
    if (!deletedCategory) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    const redisKey = `category:${id}`;
    await this.redis.del(redisKey);
    await this.redis.del('all_categories');
  }
}
