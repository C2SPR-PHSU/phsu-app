import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable(),
  middlename: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable(),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters ")
    .nullable(),
  secondlastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters ")
    .nullable(),
  studentid: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers ")
    .nullable(),
  cell_phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers ")
    .nullable(),
  alternative_phone: Yup.string()
    .matches(/^[0-9-]+$/, "Only numbers and hyphens ")
    .nullable(),

  entranceYear: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers ")
    .nullable(),
  email: Yup.string().email("Invalid email format").nullable(),
  birthdate: Yup.string(),
  institucional_email: Yup.string().email("Invalid email format").nullable(),
  line1: Yup.string()
    .matches(
      /^[A-Za-z0-9\s]+$/,
      "Only letters, numbers, and spaces are allowed"
    )
    .max(15, "Maximum of 15 characters")
    .nullable(),
  program: Yup.string()
    .matches(/^[A-Za-z-]+$/, "Only letters and hyphens are allowed")
    .nullable(),

  campusMain: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters ")
    .nullable(),
  city: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces ")
    .nullable(),

  state: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces ")
    .nullable(),

  zipcode: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers ")
    .nullable(),
});
