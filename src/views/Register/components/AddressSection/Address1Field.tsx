import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { CustomLabel } from "@/components";
const AddresLine1 = ({ formik }) => {
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

  return (
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
          formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
        }
        helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
      />
    </Grid>
  );
};

export default AddresLine1;
