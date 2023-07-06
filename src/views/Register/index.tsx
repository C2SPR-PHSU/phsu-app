import { ChangeEvent, useState } from "react";
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

import styles from "./Register.module.scss";

interface MyTextFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onValueChange: (name: string, value: string) => void;
}

const MyTextField: React.FC<MyTextFieldProps> = ({
  name,
  placeholder,
  value,
  onValueChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onValueChange(name, newValue);
  };

  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const customTextField = {
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
    <TextField
      sx={customTextField}
      placeholder={placeholder}
      size="small"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
    />
  );
};

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    secondLastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    studentId: "",
    adressLine1: "",
    adressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(formValues);
  };

  const onSubmitForm = async () => {
    try {
      const response = await requestRegister({
        email: formValues.email,
        cell_phone: formValues.phoneNumber,
        student_id: formValues.studentId,
        first_name: formValues.firstName,
        middle_name: formValues.middleName,
        last_name: formValues.lastName,
        second_last_name: formValues.secondLastName,
        birthdate: formValues.dateOfBirth,
        address_line1: formValues.adressLine1,
        address_line2: formValues.adressLine2,
        address_state: formValues.state,
        address_city: formValues.city,
        address_zipcode: formValues.zipCode,
        password: formValues.password,
      });
      console.log(formValues);
      navigate("/");
    } catch (error) {}
  };

  function isFormValid() {
    if (formValues.password !== formValues.confirmPassword) return false;
    return true;
  }

  const navigate = useNavigate();
  const onCancelRegister = () => {
    navigate("/");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        Registration
      </Typography>

      {/* Personal Information Section */}
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
        </Grid>
        {/* First Row */}
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <CustomLabel name="First Name" required={true} />
            <MyTextField
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onValueChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <CustomLabel name="Middle Name" required={false} />
            <MyTextField
              name="middleName"
              placeholder="Middle Name"
              value={formValues.middleName}
              onValueChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <CustomLabel name="Last Name" required={true} />
            <MyTextField
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onValueChange={handleInputChange}
            />
          </div>
        </Grid>
        {/* Second Row */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Second Last Name" required={false} />
          <MyTextField
            name="secondLastName"
            placeholder="Second Last Name"
            value={formValues.secondLastName}
            onValueChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Date of Birth" required={true} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#009999",
                  borderRadius: 0,
                  border: "2px solid " + "#009999",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#009999",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
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
              }}
              value={formValues.dateOfBirth}
              onChange={(newValue: any) =>
                handleInputChange("dateOfBirth", newValue.toString())
              }
              slotProps={{ textField: { size: "small", fullWidth: true } }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Phone Number" required={true} />
          <MyTextField
            name="phoneNumber"
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            onValueChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Email" required={true} />
          <MyTextField
            name="email"
            placeholder="Email"
            value={formValues.email}
            onValueChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Student Id" required={true} />
          <MyTextField
            name="studentId"
            placeholder="Student Id"
            value={formValues.studentId}
            onValueChange={handleInputChange}
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
        {/* First Row */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Adress Line 1" required={true} />
          <MyTextField
            name="adressLine1"
            placeholder="Adress Line 1"
            value={formValues.adressLine1}
            onValueChange={handleInputChange}
          />
        </Grid>
        {/* Second Row */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Adress Line 2" required={true} />
          <MyTextField
            name="adressLine2"
            placeholder="Adress Line 2"
            value={formValues.adressLine2}
            onValueChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="City" required={true} />
          <MyTextField
            name="city"
            placeholder="City"
            value={formValues.city}
            onValueChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="State" required={true} />
          <MyTextField
            name="state"
            placeholder="State"
            value={formValues.state}
            onValueChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Zip Code" required={true} />
          <MyTextField
            name="zipCode"
            placeholder="Zip Code"
            value={formValues.zipCode}
            onValueChange={handleInputChange}
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
        {/* First Row */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Password" required={true} />
          <TextField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={formValues.password}
            onChange={(event: any) =>
              handleInputChange("password", event.target.value)
            }
            fullWidth
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
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomLabel name="Confirm Password" required={true} />
          <TextField
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={formValues.confirmPassword}
            onChange={(event: any) =>
              handleInputChange("confirmPassword", event.target.value)
            }
            fullWidth
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
              variant="contained"
              fullWidth
              onClick={onSubmitForm}
              className={styles.submitButton}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
