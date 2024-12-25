import { Types } from 'mongoose';

export type User =  {
  _id: string;
  email: string;
  role: string;
  fullName?: string;
  username?: string;
  address?: string;
  contactNumber?: string;
  avatar?: string;
}
