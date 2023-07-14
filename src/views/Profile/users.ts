/* eslint-disable no-useless-catch */
import api from "@/utils/services/api";
import { userDetails } from "@/utils";

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

type ok = {
  code: number;
  data: UserProfile;
  message: string;
};

type Data = {
  action: string;
  id: string;
};

type okModify = {
  code: number;
  data: Data;
};

export const UserDetails = async (token: string): Promise<UserProfile> => {
  try {
    api.resource = userDetails;
    api.token = token;

    const res = (await api.get()) as ok; // Especificar el tipo de retorno

    return Promise.resolve(res.data);
  } catch (error) {
    throw error;
  }
};

export const UserModify = async (
  token: string,
  usermodify: Partial<UserProfile>
): Promise<Data> => {
  try {
    api.resource = userDetails;
    api.token = token;

    const res = await api.post<okModify>({
      body: usermodify,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    throw error;
  }
};