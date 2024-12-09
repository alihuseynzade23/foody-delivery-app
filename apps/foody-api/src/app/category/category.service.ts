import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.model';
import { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { NotFoundException } from '@nestjs/common';
import { CATEGORY_NOT_FOUND_ERROR, EXISTING_CATEGORY_ERROR } from './category.constants';

export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(dto: CategoryDto): Promise<CategoryDocument> {
    const existingProduct = await this.categoryModel.findOne({ name: dto.name });
    if (existingProduct) {
      throw new Error(EXISTING_CATEGORY_ERROR);
    }
    return await new this.categoryModel(dto).save();
  }

  async getCategoryById(id: string) {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    return category;
  }

  async getAllCategories() {
    return this.categoryModel.find().exec();
  }

  async updateCategory(id: string, dto: CategoryDto) {
    const updatedCategory = await this.categoryModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updatedCategory) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    return updatedCategory;
  }

  async deleteCategory(id: string) {
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id).exec();
    if (!deletedCategory) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
  }
}
