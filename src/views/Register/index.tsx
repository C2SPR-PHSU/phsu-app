import { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { requestRegister } from "./functions";
import { useFormik } from "formik";
import styles from "./Register.module.scss";
import useAlert from "@/hooks/useAlert";
import useAuthStore from "@/hooks/useAuthStore";
import AddressSection from "./components/AddressSection/Section";
import PasswordSection from "./components/PasswordSection/PasswordSection";
import { registrationValidationSchema } from "./components/validations";
import PersonalSecction from "./components/PersonalInformations/PersonalSecction";



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
       <PersonalSecction formik={formik} />
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
                style={{ textTransform: 'none' }}
              >

                <span style={{ fontSize: '1.2rem' }}>
                Cancel

                </span>
              </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Button
            type="submit"
            variant="contained"
            fullWidth
            className={styles.submitButton}
            style={{ textTransform: 'none' }} // Cambia el texto del botón a minúsculas
          >
           <span style={{ fontSize: '1.2rem' }}>Sign Up</span> {/* Aumenta el tamaño del título */}
          </Button>

            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}