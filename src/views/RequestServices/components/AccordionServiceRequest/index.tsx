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
import PhoneTextField from "@/components/PhoneTextfield";

interface MyTextFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onValueChange: (name: string, value: string) => void;
  error?: string | null;
  helperText?: string | null;
}

const primaryColor = "#009999";
const placeholderColor = "rgba(51, 51, 51, 0.4)";

const customTextField = {
  backgroundColor: 'white',
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

const MyTextField: React.FC<MyTextFieldProps> = ({
  name,
  placeholder,
  value,
  onValueChange,
  error,
  helperText
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onValueChange(name, newValue);
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
      name={name}
      inputProps={{ maxLength: name === 'student_id' ? 7 : undefined }}
      error={Boolean(error)}
      helperText={helperText}
    />
  );
};

// Funciones de validación
const validateFirstName = (value: string) => {
  if (!value) return "First Name is required";
  if (!/^[\p{L}]+$/u.test(value)) return "First Name should only contain letters";
  if (value.length > 20) return "First Name must be at most 20 characters";
  return "";
};

const validateMiddleName = (value: string) => {
  if (value && !/^[\p{L}]+$/u.test(value)) return "Middle Name should only contain letters";
  if (value && value.length > 20) return "Middle Name must be at most 20 characters";
  return "";
};

const validateLastName = (value: string) => {
  if (!value) return "Last Name is required";
  if (!/^[A-Za-z]+$/.test(value)) return "Last Name should only contain letters";
  if (value.length > 20) return "Last Name must be at most 20 characters";
  return "";
};

const validateSecondLastName = (value: string) => {
  if (value && !/^[\p{L}]+$/u.test(value)) return "Second Last Name should only contain letters";
  if (value && value.length > 20) return "Second Last Name must be at most 20 characters";
  return "";
};

const validateStudentId = (value: string) => {
  if (!value) return "Student ID is required";
  if (!/^\d*$/.test(value)) return "Only numbers are allowed";
  return "";
};

const validateBirthdate = (value: string) => {
  if (!value) return "Required";
  return "";
};

const validateCellPhone = (value: string) => {
  if (!value) return "Cell Phone is required";
  if (!/^[0-9*]+$/.test(value)) return "Phone number format (XXX) XXX-XXXX";
  if (value.length !== 10) return "Phone number must contain 10 characters";
  return "";
};

const validateEmail = (value: string) => {
  if (!value) return "Email is required";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Invalid email address";
  if (value.length > 100) return "Email must be at most 100 characters";
  return "";
};

export default function BasicAccordion({ setPersonalForm, personalForm }: any) {

  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const [personalInfo, setPersonalInfo] = useState<IUserInfoData>();

  const [errors, setErrors] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    second_last_name: '',
    student_id: '',
    birthdate: '',
    cell_phone: '',
    email: '',
  });

  useEffect(() => {
    getUserPersonalInformation();
  }, []);

  const getUserPersonalInformation = async () => {
    try {
      const response = await getUserInformation(token);
      setPersonalInfo(response);
      const {
        first_name,
        middle_name,
        last_name,
        second_last_name,
        birthdate,
        cell_phone,
        student_id,
        email
      } = response;

      setPersonalForm({
        first_name,
        middle_name,
        last_name,
        second_last_name,
        birthdate,
        cell_phone,
        student_id,
        email
      });

    } catch (error) {
      setAlert('Personal Information failed', 'error');
    }
  };

  const handlePersonalFormChange = (key: string, newValue: string) => {
    if (key === 'student_id') {
      const filteredValue = newValue.replace(/\D/g, '');
      setPersonalForm((prevState: any) => ({
        ...prevState,
        [key]: filteredValue,
      }));

      return;
    }

    setPersonalForm((prevState: any) => ({
      ...prevState,
      [key]: newValue,
    }));

    let error = "";
    switch (key) {
      case 'first_name':
        error = validateFirstName(newValue);
        break;
      case 'middle_name':
        error = validateMiddleName(newValue);
        break;
      case 'last_name':
        error = validateLastName(newValue);
        break;
      case 'second_last_name':
        error = validateSecondLastName(newValue);
        break;
      case 'student_id':
        error = validateStudentId(newValue);
        break;
      case 'birthdate':
        error = validateBirthdate(newValue);
        break;
      case 'cell_phone':
        error = validateCellPhone(newValue);
        break;
      case 'email':
        error = validateEmail(newValue);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleDateChange = (key: string, newDate: Dayjs | null) => {
    if (newDate) {
      const adjustedDate = newDate.add(12, 'hour');
      setPersonalForm((prevState: any) => ({
        ...prevState,
        [key]: adjustedDate.format(),
      }));
    }
  };

  return (
    <>
      <Accordion
        expanded={true}
        sx={{
          backgroundColor: "#efefef",
          width: "100%",
          borderRadius: "5px",
          padding: "0.5rem !important",
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
        <AccordionDetails sx={{ width: 'calc(100% - 1.5rem)' }}>
          <Typography sx={{ marginBottom: '1.5rem !important' }}>
            Provide your current contact information and make sure all the information included is correct before submission.
          </Typography>

          <Grid container spacing={2} sx={{ py: 1 }}>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <CustomLabel name="First Name" required={true} />
                <MyTextField
                  name="first_name"
                  placeholder="First Name"
                  value={personalForm?.first_name || ''}
                  onValueChange={handlePersonalFormChange}
                  error={errors.first_name}
                  helperText={errors.first_name}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <CustomLabel name="Middle Name" required={false} />
                <MyTextField
                  name="middle_name"
                  placeholder="Middle Name"
                  value={personalForm?.middle_name || ''}
                  onValueChange={handlePersonalFormChange}
                  error={errors.middle_name}
                  helperText={errors.middle_name}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <CustomLabel name="Last Name" required={true} />
                <MyTextField
                  name="last_name"
                  placeholder="Last Name"
                  value={personalForm?.last_name || ''}
                  onValueChange={handlePersonalFormChange}
                  error={errors.last_name}
                  helperText={errors.last_name}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomLabel name="Second Last Name" required={false} />
              <MyTextField
                name="second_last_name"
                placeholder="Second Last Name"
                value={personalForm?.second_last_name || ''}
                onValueChange={handlePersonalFormChange}
                error={errors.second_last_name}
                helperText={errors.second_last_name}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomLabel name="Date of Birth" required={true} />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    backgroundColor: 'white',
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
                  }}
                  value={dayjs(personalInfo?.birthdate)}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                  onChange={(date: Dayjs | null) => handleDateChange('birthdate', date)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomLabel name="Phone Number" required={true} />
              <PhoneTextField
                name="cell_phone"
                placeholder="Phone Number"
                value={personalForm?.cell_phone || ''}
                onValueChange={handlePersonalFormChange}
                sx={customTextField}
                error={errors.cell_phone}
                helperText={errors.cell_phone}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomLabel name="Email" required={true} />
              <MyTextField
                name="email"
                placeholder="Email"
                value={personalForm?.email || ''}
                onValueChange={handlePersonalFormChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomLabel name="Student Id" required={true} />
              <MyTextField
                name="student_id"
                placeholder="Student Id"
                value={personalForm?.student_id || ''}
                onValueChange={handlePersonalFormChange}
                error={errors.student_id}
                helperText={errors.student_id}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
