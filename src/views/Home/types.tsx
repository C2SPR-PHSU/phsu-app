export interface IUserServicesResponse {
  code: string;
  message: string;
  data: IUserServicesData;
}

export interface IUserServicesData {
  service: string;
  campus_id: string;
  campus_name: string;
  status: string;
  created: string;
  status_desc: string;
}

export interface IUserDocumentsData {
  created: string;
  description: string;
  id: string;
  name: string;
  ob_build: string;
  ob_handler_id: string;
  ob_message: string;
  status: string;
  status_desc: string;
  type: string;
  url: string;
}

export interface IUserDocumentsResponse {
  code: number;
  message: string;
  data: IUserDocumentsData[];
}

export interface IRequiredDocumentsProps {
  title: string;
  open: boolean;
  campusId: string;
  handleClose: () => void;
}

export interface IMessageModal {
  open: boolean;
  handleClose: () => void;
  message: string;
}