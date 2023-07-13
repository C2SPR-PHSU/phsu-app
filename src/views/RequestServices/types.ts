export interface ICampuses {
  id: number;
  name: string;
}

export interface IAllCampusesData {
  created: string;
  id: string;
  name: string;
  ob_name: string;
  status: string;
  updated: string;
}

export interface IAllCampusesResponse {
  code: string;
  message: string;
  data: IAllCampusesData[];
}

interface ICampusData {
  academic_year: string;
  created: string;
  id: number;
  service: string;
  status: string;
  status_desc: string;
  term_id: number;
}

export interface IUploadDocument {
  campusId: number;
  documentId: string;
  document: File;
  token: string;
}

export interface IUserCampusResponse {
  code: string;
  message: string;
  data: ICampusData;
}

export interface ISubmitDocumentResponse {
  code: number;
  data: boolean;
  message: string;
}

export interface ICampusDocumentResponse {
  code: number;
  message: string;
  data: ICampusDocumentsData[];
}

export interface ICampusDocumentsData {
  id: string;
  mandatory: string;
  name: string;
  type: string;
  description: string;
}

export interface IAcademicYearsResponse {
  code: number;
  message: string;
  data: number[]
}

export interface IEntranceTermsData {
  id: string;
  title: string;
  ob_name: string;
}

export interface IEntranceTermsResponse {
  code: number;
  message: string;
  data: IEntranceTermsData[]
}