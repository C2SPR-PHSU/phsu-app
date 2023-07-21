import { ChangeEvent, useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles.module.scss";
import CustomLabel from '@/components/CustomLabel';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getUserInformation } from '@/views/RequestServices/functions';
import { IUserInfoData } from '@/views/RequestServices/types';
import useAuthStore from "@/hooks/useAuthStore";
import useAlert from "@/hooks/useAlert";
import dayjs, { Dayjs } from 'dayjs';

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
      disabled
    />
  );
};

export default function BasicAccordion() {

  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const [personalInfo, setPersonalInfo] = useState<IUserInfoData>();

  useEffect(() => {
    getUserPersonalInformation();
  }, [])

  const getUserPersonalInformation = async () => {
    try {
      const response = await getUserInformation(token);
      setPersonalInfo(response)
    } catch (error) {
      setAlert('Personal Information failed', 'error')
    }
  }

  return (
    <>
      <Accordion
        expanded={true}
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
                      value={personalInfo?.first_name || ''}
                      onValueChange={() => console.log('here')}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div>
                    <CustomLabel name="Middle Name" required={false} />
                    <MyTextField
                      name="middleName"
                      placeholder="Middle Name"
                      value={personalInfo?.middle_name || ''}
                      onValueChange={() => console.log('here')}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div>
                    <CustomLabel name="Last Name" required={true} />
                    <MyTextField
                      name="lastName"
                      placeholder="Last Name"
                      value={personalInfo?.last_name || ''}
                      onValueChange={() => console.log('here')}
                    />
                  </div>
                </Grid>
                {/* Second Row */}
                <Grid item xs={12} sm={6} md={4}>
                  <CustomLabel name="Second Last Name" required={false} />
                  <MyTextField
                    name="secondLastName"
                    placeholder="Second Last Name"
                    value={personalInfo?.second_last_name || ''}
                    onValueChange={() => console.log('here')}
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
                      value={dayjs(personalInfo?.birthdate)}
                      slotProps={{ textField: { size: "small", fullWidth: true } }}
                      disabled
                      readOnly
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomLabel name="Phone Number" required={true} />
                  <MyTextField
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={personalInfo?.cell_phone || ''}
                    onValueChange={() => console.log('here')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomLabel name="Email" required={true} />
                  <MyTextField
                    name="email"
                    placeholder="Email"
                    value={personalInfo?.email || ''}
                    onValueChange={() => console.log('here')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomLabel name="Student Id" required={true} />
                  <MyTextField
                    name="studentId"
                    placeholder="Student Id"
                    value={personalInfo?.student_id || ''}
                    onValueChange={() => console.log('here')}
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