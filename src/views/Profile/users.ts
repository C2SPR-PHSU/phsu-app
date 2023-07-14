/* eslint-disable no-useless-catch */
import api from "@/utils/services/api";
import { userDetails } from "@/utils";
import useAuthStore from "@/hooks/useAuthStore";

export interface UserProfile {
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
}

export const UserDetails = async (token: string): Promise<UserProfile> => {
  try {
    api.resource = userDetails;

    const res = await api.get(); // Especificar el tipo de retorno

    return res.data;
  } catch (error) {
    throw error;
  }
};
