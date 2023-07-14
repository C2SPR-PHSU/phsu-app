import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  middlename: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  secondlastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  studentid: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers")
    .nullable()
    .max(15, "Maximum of 15 characters"),
  cell_phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers")
    .nullable()
    .max(30, "Maximum of 30 characters"),
  alternative_phone: Yup.string()
    .matches(/^[0-9-]+$/, "Only numbers and hyphens")
    .nullable()
    .max(15, "Maximum of 15 characters"),
  entranceYear: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers")
    .nullable()
    .max(15, "Maximum of 15 characters"),
  email: Yup.string().email("Invalid email format").nullable(),
  birthdate: Yup.string().max(100, "Maximum of 100 characters"),
  institucional_email: Yup.string()
    .email("Invalid email format")
    .nullable()
    .max(100, "Maximum of 100 characters"),
  line1: Yup.string()
    .matches(/^[A-Za-z0-9\s]+$/, "Only letters, numbers, and spaces")
    .max(15, "Maximum of 15 characters")
    .nullable(),
  program: Yup.string()
    .matches(/^[A-Za-z-]+$/, "Only letters and hyphens are allowed")
    .nullable()
    .max(15, "Maximum of 15 characters"),
  campusMain: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  city: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  state: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces")
    .nullable()
    .min(3, "Minimum of 3 characters")
    .max(20, "Maximum of 20 characters"),
  zipcode: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers")
    .nullable()
    .max(15, "Maximum of 15 characters"),
});
