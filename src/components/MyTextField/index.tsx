import { TextField } from "@mui/material";
import { error } from "console";
import React from "react";

interface MyTextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  formik: any;
  customTextField: any;
  showError: any;
}

const MyTextField: React.FC<MyTextFieldProps> = ({
  name,
  label,
  placeholder,
  required = false,
  formik,
  customTextField,
  showError,
}) => {
  return (
    <div>
      <label>
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <TextField
        sx={customTextField}
        fullWidth
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik}
        error={showError}
        helperText={formik}
      />
    </div>
  );
};

export default MyTextField;
