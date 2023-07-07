import api from "@/utils/services/api";
import { campuses } from "@/utils";

export const getCampuses = async () => {
  try {
    api.resource = campuses;

    const res = await api.get();
    return res.data;
  } catch (error) {
    throw error;
  }
};
