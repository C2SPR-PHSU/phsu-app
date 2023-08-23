import { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomLabel from "@/components/CustomLabel";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { requestRegister } from "./functions";
import { useFormik } from "formik";
import styles from "./Register.module.scss";
import useAlert from "@/hooks/useAlert";
import useAuthStore from "@/hooks/useAuthStore";
import { registrationValidationSchema } from "./components/validations";
import AddressSection from "./components/AddressSection/Section";
import FirstNameField from "./components/PersonalInformations/FirstNameField";
import MiddleNameField from "./components/PersonalInformations/MiddleNameField";
import LastNameField from "./components/PersonalInformations/LastNameField";
import SecondLastNameField from "./components/SecondLastName";
import PhoneNumberField from "./components/PersonalInformations/PhoneNumberField";
import EmailField from "./components/PersonalInformations/EmailField";
import StudentIdField from "./components/PersonalInformations/StudentIdField";
import SectionTitle from "./components/AddressSection/Title";
import PasswordSection from "./components/PasswordSection/PasswordSection";

export default function Registration() {
  const { setAlert } = useAlert();
  const setLogin = useAuthStore((state: any) => state.setLogin);

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
    validationSchema: registrationValidationSchema,

    onSubmit: async () => {
      await senUserForRegister();
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

  // Send data user
  const senUserForRegister = async () => {
    try {
      await requestRegister({
        email: formik.values.email,
        cell_phone: formik.values.phoneNumber,
        student_id: formik.values.studentId,
        first_name: formik.values.firstName,
        middle_name: formik.values.middleName,
        last_name: formik.values.lastName,
        second_last_name: formik.values.secondLastName,
        birthdate: formik.values.birthdate,
        address_line1: formik.values.addressLine1,
        address_line2: formik.values.addressLine2,
        address_state: formik.values.addressState,
        address_city: formik.values.addressCity,
        address_zipcode: formik.values.addressZipcode,
        password: formik.values.password,
      });
      setAlert("Register successfully!", "success");
      await setLogin(formik.values.email, formik.values.password);
      navigate("/");
    } catch (error) {
      setAlert("Something happened. Try again", "error");
    }
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        Registration
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Personal Information Section */}
        <Grid container spacing={2} sx={{ py: 1 }}>
          <SectionTitle title="Personal Information" />
          {/* FistName */}
          <FirstNameField formik={formik} />
          {/* ---------------------------Middle Name---------------------------------------- */}
          <MiddleNameField formik={formik} />
          {/* ---------------------------LastName------------------------------------------ */}
          <LastNameField formik={formik} />
          {/* ------------------------------Second LastName-------------------------------------- */}
          <SecondLastNameField formik={formik} />
          {/* ------------------------------------------- Date of Birth --------------------------------------- */}

          <Grid item xs={12} sm={6} md={4}>
            <CustomLabel name="Date of Birth" required={true} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ ...Date, width: "90%" }}
                value={formik.values.birthdate}
                onChange={(newValue) => {
                  formik.setFieldValue("birthdate", newValue);
                }}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>

          {/* --------------------------------Phone Number-------------------------------------------------- */}
          <PhoneNumberField formik={formik} />

          {/* ----------------------------------------Email ---------------------------------------- */}
          <EmailField formik={formik} />

          {/*---------------------------Student Id--------------------------------------  */}
          <StudentIdField formik={formik} />
        </Grid>

        {/* Address Section */}
        <AddressSection formik={formik} />

        {/* Password Creation Section */}
        <PasswordSection
          formik={formik}
          handleTogglePasswordVisibility={handleTogglePasswordVisibility}
          showPassword={showPassword}
        />

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
