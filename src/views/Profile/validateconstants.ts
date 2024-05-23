import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[\p{L}]+$/u, "First Name should only contain letters")
    .required("First Name is required")
    .max(20, "First Name must be at most 20 characters"),

  middle_name: Yup.string()
    .matches(/^[\p{L}]+$/u, "Middle Name should only contain letters")
    .max(20, "Middle Name must be at most 20 characters"),

  last_name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name should only contain letters")
    .required("Last Name is required")
    .max(20, "Last Name must be at most 20 characters"),

  second_last_name: Yup.string()
    .matches(/^[\p{L}]+$/u, "Second Last Name should only contain letters")
    .max(20, "Second Last Name must be at most 20 characters"),

  student_id: Yup.string()
    .required('Studen ID is Required')
    .matches(/^\d*$/, 'Only numbers are allowed'),

  birthdate: Yup.date().required("Required"),

  cell_phone: Yup.string()
    .required("Cell Phone is required")
    .matches(/^[0-9*]+$/, "Phone number format (XXX) XXX-XXXX")
    .test('len', "Phone number must contain 10 characters", val => val.length === 10),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(100, "Email must be at most 100 characters"),

  address_line1: Yup.string()
    .required("Address Line 1 is required")
    .max(40, "Address Line 1 must be at most 40 characters"),

  address_line2: Yup.string()
    .max(40, "Address Line 2 must be at most 40 characters"),

  address_city: Yup.string()
    .required("Address City is required")
    .max(25, "Address City must be at most 25 characters"),

  address_state: Yup.string()
    .required("Address State is required")
    .max(40, "Address State must be at most 40 characters"),

  address_zipcode: Yup.number()
    .typeError("Address Zip Code must be a number")
    .required("Address Zip Code is required"),

  program: Yup.string()
    .matches(/^[A-Za-z-]+$/, "Only letters and hyphens are allowed")
    .nullable()
    .max(15, "Maximum of 15 characters"),
});
