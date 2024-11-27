import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.model';
import { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { NotFoundException } from '@nestjs/common';
import { CATEGORY_NOT_FOUND_ERROR } from './category.constants';

export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(dto: CategoryDto): Promise<CategoryDocument> {
    const newCategory = new this.categoryModel(dto);
    return newCategory.save();
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
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}
