import * as Yup from "yup";

export const registrationValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First Name should only contain letters")
    .required("First Name is required")
    .max(20, "First Name must be at most 20 characters"),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name should only contain letters")
    .required("Last Name is required")
    .max(20, "Last Name must be at most 20 characters"),

    secondLastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Second Last Name must contain only letters")
    .max(20, "Second Last Name must be at most 20 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(100, "Email must be at most 100 characters"),

  phoneNumber: Yup.string()
    .required("Cell Phone is required")
    .matches(/^[0-9]+$/, "Cell Phone should only contain numbers")
    .max(20, "Cell Phone must be at most 20 characters"),

  studentId: Yup.string()
    .required("Student ID is required")
    .min(6, "Password must be at least 6 characters long")
    .matches(/^[0-9]+$/, "Cell Phone should only contain numbers")
    .max(20, "Student ID must be at most 20 characters"),

    middleName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Middle Name must contain only letters")
    .max(20, "Middle Name must be at most 20 characters"),


  addressLine1: Yup.string()
    .required("Address Line 1 is required")
    .max(20, "Address Line 1 must be at most 20 characters"),

  addressLine2: Yup.string()
    .required("Address Line 2 is required")
    .max(20, "Address Line 2 must be at most 20 characters"),

  addressState: Yup.string()
    .required("Address State is required")
    .max(20, "Address State must be at most 20 characters"),

  addressCity: Yup.string()
    .required("Address City is required")
    .max(22, "Address City must be at most 22 characters"),

  addressZipcode: Yup.number().required("Address Zip Code is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .oneOf([Yup.ref("repeatPassword")], "The passwords do not match")
    .max(20, "Password must be at most 20 characters"),

  repeatPassword: Yup.string()
  .matches(
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Password must contain at least one uppercase letter, one digit, and be at least 8 characters"
  )
    .max(20, "Password must be at most 20 characters"),

    birthdate: Yup.date()
    .max(new Date(new Date().getFullYear() - 84, 0, 1), 'Age must be up to 84 years.')
    .required('Date of Birth is required'),
});
