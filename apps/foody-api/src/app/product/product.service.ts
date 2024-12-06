import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { EXISTING_PRODUCT_ERROR, PRODUCT_NOT_FOUND_ERROR } from './product.constants';
import { NotFoundException } from '@nestjs/common';

export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async createProduct(dto: ProductDto) {
    const existingRestaurant = await this.productModel.findOne({ name: dto.name });
    if (existingRestaurant) {
      throw new Error(EXISTING_PRODUCT_ERROR);
    }
    return await new this.productModel(dto).save();
  }

  async getAllProducts() {
    return await this.productModel.find().exec();
  }

  async getProductById(id: string) {
    const foundProduct = await this.productModel.findById(id).exec();
    if (!foundProduct) {
      throw new NotFoundException(EXISTING_PRODUCT_ERROR);
    }
    return foundProduct;
  }

  async getProductByRestaurantId(restaurantId: string) {
    return await this.productModel.find({ restaurantId }).exec();
  }

  async updateProduct(id: string, dto: ProductDto) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();

    if (!updatedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();

    if (!deletedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
  }
}
