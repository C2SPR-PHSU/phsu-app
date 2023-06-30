import api from "@/utils/services/api";
import { login } from "@/utils";
import { IUserLogin } from '@/types/responses';

interface IUserLoginParams {
  email: string;
  password: string;
}

export const requestLogin = async ({ email, password }: IUserLoginParams) => {
  try {
    api.resource = login;

    const res = await api.post<IUserLogin>({ body: { email, password }});
    console.log(res);

    return res;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
