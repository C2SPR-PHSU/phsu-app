import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { CustomLabel } from "@/components";

const FirstNameField = ({ formik }) => {
  const primaryColor = "#009999";

  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const customTextField = {
    width: "90%",
    "& .MuiInputBase-input": {
      height: "1.9rem",
    },
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
  return (
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
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
    </Grid>
  );
};

export default FirstNameField;
