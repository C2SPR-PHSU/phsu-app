import { ChangeEvent, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles.module.scss";
import CustomLabel from '../CustomLabel';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Grid,
  TextField,
} from "@mui/material";

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

export default function BasicAccordion() {

    const [formValues, setFormValues] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        secondLastName: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        studentId: "",
        entranceYear: "",
        campus: "",
        entranceTerm: "",
    });

    const handleInputChange = (name: string, value: string) => {
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
      <>
        <Accordion sx={{
          backgroundColor: "#efefef",
          width: "100%",
          borderRadius: "5px",
          padding: "0.5rem",
          marginBottom: "1.5rem !important"
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles["box-academic-i"]}>
              Academic Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ py: 1 }}>
                {/* First Row */}
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <CustomLabel name="Entrance Academic Year" required={true} />
                    <MyTextField
                      name="entranceYear"
                      placeholder="Entrance Academic Year"
                      value={formValues.entranceYear}
                      onValueChange={handleInputChange}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <CustomLabel name="Campus" required={true} />
                    <MyTextField
                      name="campus"
                      placeholder="Campus"
                      value={formValues.campus}
                      onValueChange={handleInputChange}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <CustomLabel name="Entrance Term" required={true} />
                    <MyTextField
                      name="entranceTerm"
                      placeholder="Entrance Term"
                      value={formValues.entranceTerm}
                      onValueChange={handleInputChange}
                    />
                  </div>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "#efefef",
            width: "100%",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={styles["box-academic-i"]}>
                Personal Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ py: 1 }}>
              <AccordionDetails>
                  <Grid container spacing={2} sx={{ py: 1 }}>
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
              </AccordionDetails>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </>
    );
}