import api from "@/utils/services/api";
import { userDocuments } from "@/utils";
import { IUserDocumentsResponse } from '../types';

export const getUserDocuments = async (campusId: string, token: string, show: number = 1) => {
  try {
    api.resource = userDocuments;
    api.token = token

    const res = await api.post<IUserDocumentsResponse>({
      body: {
        campus_id: campusId,
        show
      }
    });
    
    return res.data;
  } catch (error) {
    throw error;
  }
};
