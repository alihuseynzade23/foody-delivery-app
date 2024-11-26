import { Types } from 'mongoose';

export interface User {
  _id: Types.ObjectId;
  email: string;
  role: string;
  fullName?: string;
  username?: string;
  address?: string;
  contactNumber?: string;
  avatar?: string;
}
