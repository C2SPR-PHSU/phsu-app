import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  middlename: Yup.string().required("Middle Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  secondlastname: Yup.string().required("Second Last Name is required"),
  studentid: Yup.string().required("Student ID is required"),
  birthdate: Yup.string().required("Date of Birth is required"),
  cell_phone: Yup.string().required("Phone Number is required"),
  alternative_phone: Yup.string().required(
    "Alternative Phone Number is required"
  ),
  email: Yup.string().required("Email is required"),
  institucional_email: Yup.string().required("Institucional Email is required"),
});

export default validationSchema;
