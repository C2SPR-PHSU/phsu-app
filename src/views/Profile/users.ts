/* eslint-disable no-useless-catch */
import api from "@/utils/services/api";
import { userDetails, userModify } from "@/utils";

export type UserProfile = {
  email: string;
  cell_phone: string;
  student_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  birthdate: string;
  address_line1: string;
  address_line2: string;
  address_state: string;
  address_city: string;
  address_zipcode: string;
  password: string;
  alternative_phone: string;
  institucional_email: string;
  entrance_year: string;
  campus: string;
  entrance_terms: string;
  program: string;
};

type ResponseGetDetails = {
  code: number;
  data: UserProfile;
  message: string;
};

type ResponseActions = {
  action: string;
  id: string;
};

type IProfileModifyResponse = {
  code: number;
  data: ResponseActions;
};

//
export const UserDetails = async (token: string): Promise<UserProfile> => {
  try {
    api.resource = userDetails;
    api.token = token;

    const res: ResponseGetDetails = await api.get();

    return res.data;
  } catch (error) {
    throw error;
  }
};

// send to modify
export const UserModify = async (
  token: string,
  usermodify: Partial<UserProfile>
): Promise<ResponseActions> => {
  try {
    api.resource = userModify;
    api.token = token;

    const res = await api.post<IProfileModifyResponse>({
      body: usermodify,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
