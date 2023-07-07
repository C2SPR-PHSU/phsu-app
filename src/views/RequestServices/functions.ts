import api from "@/utils/services/api";
import { campuses, campusDocuments } from "@/utils";
import axios from 'axios';

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
}

export const uploadDocument = async ({
  campusId, 
  documentId, 
  document
}: IUploadDocument) => {
  try {
    api.resource = campusDocuments;
    const url = "http://apiphsu.lobsys.net:8080/campus/documents"

    const formData = new FormData();
 
    // Update the formData object
    formData.append(
        "document",
        document,
        document.name
    );

    formData.append("campus_id", "2")
    formData.append("document_id", "2")
    formData.append("id", "1")

    // const test = await axios.post(url, formData);
    // console.log(test)
    fetch(
			url,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

    // const res = await api.post({ 
    //   body: formData
    // });
    // return res.data;
  } catch (error) {
    throw error;
  } 
};
