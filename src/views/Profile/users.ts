/* eslint-disable no-useless-catch */
import api from "@/utils/services/api";
import { userDetails, updateUserProfile } from "@/utils";
import { UserProfile } from '@/types/user';
import { IProfileModifyResponse } from '@/types/responses';

type ResponseGetDetails = {
  code: number;
  data: UserProfile;
  message: string;
};

// get dataUser
export const getUserDetails = async (token: string) => {
  try {
    api.resource = userDetails;
    api.token = token;

    const res = await api.get<ResponseGetDetails>();

    return res.data;
  } catch (error) {
    throw error;
  }
};