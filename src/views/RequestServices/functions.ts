import api from "@/utils/services/api";
import { campuses, campusDocuments, uploadDocuments, userCampus, submitDocumentOnbase } from "@/utils";
import { 
  IUserCampusResponse,
  IAllCampusesResponse,
  ISubmitDocumentResponse,
  IUploadDocument,
  ICampusDocumentResponse
} from './types'

export const getCampuses = async () => {
  try {
    api.resource = campuses;

    const res = await api.get<IAllCampusesResponse>();
    
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCampus = async (campusId: string, token: string) => {
  try {
    api.resource = userCampus;
    api.token = token;

    const res = await api.post<IUserCampusResponse>({
      body: {
        campus_id: parseInt(campusId)
      }
    });

    return res.data;
  } catch (error) {
    throw error
  }
}

export const getCampusDocuments = async (id: number) => {
  try {
    api.resource = campusDocuments;

    const res = await api.post({ body: { id } });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const uploadDocument = async ({
  campusId, 
  documentId, 
  document, 
  token
}: IUploadDocument) => {
  try {
    api.resource = uploadDocuments;
    api.token = token

    const res = await api.post<ICampusDocumentResponse>({ 
      body: {
        campus_id: campusId,
        document_id: parseInt(documentId),
        document,
        force: 1
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const submitDocument = async(campusId: number, token: string) => {
  try {
    api.resource = submitDocumentOnbase;
    api.token = token;

    const res = await api.post<ISubmitDocumentResponse>({ 
      body: {
        campus_id: campusId
      }
    });

    return res.data;

  } catch (error) {
    throw error;
  }
}