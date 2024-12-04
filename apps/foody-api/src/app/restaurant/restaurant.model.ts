import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  image?: string;

  @Prop({ required: false })
  cuisine?: string;

  @Prop({ required: false })
  price?: number;

  @Prop({ required: false })
  deliveryTime?: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, type: String })
  categoryId: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
