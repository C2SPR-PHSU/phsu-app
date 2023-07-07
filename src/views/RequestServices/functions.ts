import api from "@/utils/services/api";
import { campuses, campusDocuments } from "@/utils";

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
