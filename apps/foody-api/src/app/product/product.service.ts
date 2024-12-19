import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { EXISTING_PRODUCT_ERROR, PRODUCT_NOT_FOUND_ERROR } from './product.constants';
import { NotFoundException } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async createProduct(dto: ProductDto) {
    const existingRestaurant = await this.productModel.findOne({ name: dto.name });
    if (existingRestaurant) {
      throw new Error(EXISTING_PRODUCT_ERROR);
    }
    const newProduct = await new this.productModel(dto).save();

    await this.redis.del('all_products');

    return newProduct;
  }

  async getAllProducts() {
    const redisKey = 'all_products';

    const cachedProducts = await this.redis.get(redisKey);
    if (cachedProducts) {
      return JSON.parse(cachedProducts);
    }

    const products = await this.productModel.find().exec();

    await this.redis.set(redisKey, JSON.stringify(products), 'EX', 60);

    return products;
  }

  async getProductById(id: string) {
    const redisKey = `product:${id}`;

    const cachedProduct = await this.redis.get(redisKey);
    if (cachedProduct) {
      return JSON.parse(cachedProduct);
    }

    const foundProduct = await this.productModel.findById(id).exec();
    if (!foundProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }

    await this.redis.set(redisKey, JSON.stringify(foundProduct), 'EX', 60 * 60);

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

    // const redisKey = `product:${id}`;
    await this.redis.del('all_products'); 
    // await this.redis.set(redisKey, JSON.stringify(updatedProduct), 'EX', 60 * 60);

    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();

    if (!deletedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }

    // const redisKey = `product:${id}`;
    await this.redis.del('all_products');
    // await this.redis.del(redisKey);
  }
}
