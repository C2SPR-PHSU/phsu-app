import { IUserLoginData } from './user';

// POST - USER LOGIN
export interface IUserLogin {
  code: string;
  message: string;
  data: IUserLoginData;
}