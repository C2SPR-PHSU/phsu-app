import api from "@/utils/services/api";
import { campuses, campusDocuments, uploadDocuments, userDocuments } from "@/utils";

interface userDocumentData {
    campusId: number;
}

export const getUserDocuments = async (token: string) => {
    try {
        api.resource = userDocuments;
        // api.token = token

        const res: { data: any } = await api.post({  // Assuming 'data' is a property in the response object
            body: {
                campus_id: 2, // The API crashes if this value is != 2 idk
            }
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};
