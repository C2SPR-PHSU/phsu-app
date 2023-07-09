import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomLabel from "@/components/CustomLabel";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { requestRegister } from "./functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Register.module.scss";

export default function Registration() {
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      studentId: "",
      firstName: "",
      middleName: "",
      lastName: "",
      secondLastName: "",
      birthdate: "",
      addressLine1: "",
      addressLine2: "",
      addressState: "",
      addressCity: "",
      addressZipcode: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "First Name should only contain letters")
        .required("First Name is required")
        .max(20, "First Name must be at most 20 characters"),

      lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Last Name should only contain letters")
        .required("Last Name is required")
        .max(20, "Last Name must be at most 20 characters"),

      secondLastName: Yup.string().max(
        20,
        "Second Last Name must be at most 20 characters"
      ),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .max(20, "Email must be at most 20 characters"),

      phoneNumber: Yup.string()
        .required("Cell Phone is required")
        .matches(/^[0-9]+$/, "Cell Phone should only contain numbers")
        .max(20, "Cell Phone must be at most 20 characters"),

      studentId: Yup.string()
        .required("Student ID is required")
        .min(6, "Password must be at least 6 characters long")
        .matches(/^[0-9]+$/, "Cell Phone should only contain numbers")
        .max(20, "Student ID must be at most 20 characters"),

      middleName: Yup.string().max(
        20,
        "Middle Name must be at most 20 characters"
      ),

      birthdate: Yup.string()
        .required("Birthdate is required")
        .max(20, "Birthdate must be at most 20 characters"),

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
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .oneOf([Yup.ref("password")], "The passwords do not match")
        .max(20, "Password must be at most 20 characters"),
    }),

    onSubmit: (values) => {
      try {
        const response = requestRegister({
          email: values.email,
          cell_phone: values.phoneNumber,
          student_id: values.studentId,
          first_name: values.firstName,
          middle_name: values.middleName,
          last_name: values.lastName,
          second_last_name: values.secondLastName,
          birthdate: values.birthdate,
          address_line1: values.addressLine1,
          address_line2: values.addressLine2,
          address_state: values.addressState,
          address_city: values.addressCity,
          address_zipcode: values.addressZipcode,
          password: values.password,
        });
        console.log(values);
        console.log("response ----> ", response);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const onCancelRegister = () => {
    navigate("/");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const customTextField = {
    width: "90%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
      borderRadius: 0,
      border: "2px solid " + primaryColor,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "1rem",
      color: placeholderColor,
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: primaryColor,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0.7rem",
    },
  };

  const Date = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
      borderRadius: 0,
      border: "2px solid " + "#009999",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "1rem",
      color: "#333333",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#009999",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0.7rem",
    },
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        Registration
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Personal Information Section */}
        <Grid container spacing={2} sx={{ py: 1 }}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
          </Grid>

          {/* FistName */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="First Name" required={true} />
            <TextField
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              sx={customTextField}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          {/* ---------------------------Middle Name---------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Middle Name" required={false} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="Middle Name"
              name="middleName"
              value={formik.values.middleName}
              sx={customTextField}
              error={
                formik.touched.middleName && Boolean(formik.errors.middleName)
              }
              helperText={formik.touched.middleName && formik.errors.middleName}
            />
          </Grid>

          {/* ---------------------------LastName------------------------------------------ */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Last Name" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              sx={customTextField}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          {/* ------------------------------Second LastName-------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Second Last Name" required={false} />
            <TextField
              sx={customTextField}
              name="secondLastName"
              type="text"
              placeholder="Second Last Name"
              onChange={formik.handleChange}
              value={formik.values.secondLastName}
              error={
                formik.touched.secondLastName &&
                Boolean(formik.errors.secondLastName)
              }
              helperText={
                formik.touched.secondLastName && formik.errors.secondLastName
              }
            />
          </Grid>
          {/* ------------------------------------------- Date of Birth --------------------------------------- */}

          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Date of Birth" required={true} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={Date}
                value={formik.values.birthdate}
                onChange={(newValue) => {
                  formik.setFieldValue("birthdate", newValue);
                }}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>

          {/* --------------------------------Phone Number-------------------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Phone Number" required={true} />
            <TextField
              sx={customTextField}
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Grid>

          {/* ----------------------------------------Email ---------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Email" required={true} />
            <TextField
              sx={customTextField}
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          {/*---------------------------Student Id--------------------------------------  */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Student Id" required={true} />
            <TextField
              sx={customTextField}
              name="studentId"
              placeholder="Student ID"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.studentId}
              error={
                formik.touched.studentId && Boolean(formik.errors.studentId)
              }
              helperText={formik.touched.studentId && formik.errors.studentId}
            />
          </Grid>
        </Grid>

        {/* Address Section */}
        <Grid container spacing={2} sx={{ py: 1 }}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
          </Grid>
          {/* --------------------------Adress Line 1----------------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Adress Line 1" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="Address Line 1"
              name="addressLine1"
              value={formik.values.addressLine1}
              sx={customTextField}
              error={
                formik.touched.addressLine1 &&
                Boolean(formik.errors.addressLine1)
              }
              helperText={
                formik.touched.addressLine1 && formik.errors.addressLine1
              }
            />
          </Grid>
          {/* ----------------------------"Adress Line 2----------------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Adress Line 2" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="Address Line 2"
              name="addressLine2"
              value={formik.values.addressLine2}
              sx={customTextField}
              error={
                formik.touched.addressLine2 &&
                Boolean(formik.errors.addressLine2)
              }
              helperText={
                formik.touched.addressLine2 && formik.errors.addressLine2
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="City" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="Address City"
              name="addressCity"
              value={formik.values.addressCity}
              sx={customTextField}
              error={
                formik.touched.addressCity && Boolean(formik.errors.addressCity)
              }
              helperText={
                formik.touched.addressCity && formik.errors.addressCity
              }
            />
          </Grid>

          {/* -----------------------------State --------------------------------------------------------  */}

          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="State" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="State"
              name="addressState"
              value={formik.values.addressState}
              sx={customTextField}
              error={
                formik.touched.addressState &&
                Boolean(formik.errors.addressState)
              }
              helperText={
                formik.touched.addressState && formik.errors.addressState
              }
            />
          </Grid>

          {/* ------------------------------------------------Zip Code----------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Zip Code" required={true} />
            <TextField
              type="text"
              onChange={formik.handleChange}
              placeholder="Address Zipcode"
              name="addressZipcode"
              value={formik.values.addressZipcode}
              sx={customTextField}
              error={
                formik.touched.addressZipcode &&
                Boolean(formik.errors.addressZipcode)
              }
              helperText={
                formik.touched.addressZipcode && formik.errors.addressZipcode
              }
            />
          </Grid>
        </Grid>

        {/* Password Creation Section */}
        <Grid container spacing={2} sx={{ py: 1 }}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Creation of Password
            </Typography>
          </Grid>

          {/* -------------------------------------------------Password -----------------------------------------*/}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Password" required={true} />
            <TextField
              sx={customTextField}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          {/* --------------------------------------------Repeat Password -------------------------------------------------------- */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Confirm Password" required={true} />
            <TextField
              sx={customTextField}
              placeholder="Confirm Password"
              name="repeatPassword"
              type={showPassword ? "text" : "password"}
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={
                formik.touched.repeatPassword &&
                Boolean(formik.errors.repeatPassword)
              }
              helperText={
                formik.touched.repeatPassword && formik.errors.repeatPassword
              }
            />
          </Grid>
        </Grid>

        <Box sx={{ marginBottom: "3rem !important" }}>
          <Grid container spacing={2} justifyContent="start" sx={{ py: 4 }}>
            <Grid item xs={12} sm={3}>
              <Button
                variant="outlined"
                className={styles.cancelButton}
                fullWidth
                onClick={onCancelRegister}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={styles.submitButton}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
