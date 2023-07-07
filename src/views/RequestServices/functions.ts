import api from "@/utils/services/api";
import { campuses, campusDocuments, uploadDocuments } from "@/utils";

export const getCampuses = async () => {
  try {
    api.resource = campuses;

    const res = await api.get();
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCampusDocuments = async (id: number) => {
  try {
    api.resource = campusDocuments;

    const res = await api.post({ body: { id } });
    return res.data;
  } catch (error) {
    throw error;
  }
};

interface IUploadDocument {
  campusId: number;
  documentId: number;
  document: File;
  token: string;
}

export const uploadDocument = async ({
  campusId, 
  documentId, 
  document, 
  token
}: IUploadDocument) => {
  try {
    api.resource = uploadDocuments;
    api.token = token

    const res = await api.post({ 
      body: {
        campus_id: 2, // The API crashes if this value is != 2 idk
        document_id: documentId,
        document,
        force: 1
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
