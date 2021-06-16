import { AvatarModel } from './avatar-model';

export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: AvatarModel;
};
