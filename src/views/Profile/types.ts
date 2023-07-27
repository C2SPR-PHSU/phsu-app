export type UserProfile = {
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
};

type ResponseGetDetails = {
  code: number;
  data: UserProfile;
  message: string;
};

type ResponseActions = {
  action: string;
  id: string;
};

type IProfileModifyResponse = {
  code: number;
  data: ResponseActions;
};