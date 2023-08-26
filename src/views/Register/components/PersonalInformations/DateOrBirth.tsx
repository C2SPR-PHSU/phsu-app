import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CustomLabel } from "@/components";


const DateOrBirth = ({ formik }) => {
  const Date = {
    "& .MuiInputBase-input": {
      height: "1.9rem",
    },
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
  );
};

export default DateOrBirth;
