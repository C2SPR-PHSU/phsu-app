import api from "@/utils/services/api";
import {
  logout,
} from "@/utils";
import { ILogOut } from '@/types';

export const logOut = async (token: string) => {
  try {
    api.resource = logout;

    const res = await api.post<ILogOut>({ body: { token }});

    return res.data;
  } catch (error) {
    throw error;
  }
};