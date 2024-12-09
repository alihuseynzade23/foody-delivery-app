import { InjectModel } from '@nestjs/mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.model';
import { Model } from 'mongoose';
import { RestaurantDto } from './dto/restaurant.dto';
import { EXISTING_RESTAURANT_ERROR, RESTAURANT_NOT_FOUND_ERROR } from './restaurant.constants';
import { NotFoundException } from '@nestjs/common';

export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<RestaurantDocument>,
  ) {}

  async createRestaurant(dto: RestaurantDto) {
    const existingRestaurant = await this.restaurantModel.findOne({ name: dto.name });
    if (existingRestaurant) {
      throw new Error(EXISTING_RESTAURANT_ERROR);
    }
    return await new this.restaurantModel(dto).save();
  }

  async getAllRestaurants() {
    return await this.restaurantModel.find().exec();
  }

  async getRestaurantById(id: string) {
    const foundRestaurant = await this.restaurantModel.findById(id).exec();
    if (!foundRestaurant) {
      throw new NotFoundException(RESTAURANT_NOT_FOUND_ERROR);
    }
    return foundRestaurant;
  }

  async getRestaurantByCategoryId(categoryId: string) {
    return await this.restaurantModel.find({ categoryId }).exec();
  }

  async updateRestaurant(id: string, dto: RestaurantDto) {
    const updatedRestaurant = await this.restaurantModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!updatedRestaurant) {
      throw new NotFoundException(RESTAURANT_NOT_FOUND_ERROR);
    }
    return updatedRestaurant;
  }

  async deleteRestaurant(id: string) {
    const deletedRestaurant = await this.restaurantModel.findByIdAndDelete(id).exec();

    if (!deletedRestaurant) {
      throw new NotFoundException(RESTAURANT_NOT_FOUND_ERROR);
    }
  }
}
