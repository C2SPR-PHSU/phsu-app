import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { CustomLabel } from "@/components";
const AddresLine2 = ({ formik }) => {
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
      <CustomLabel name="Adress Line 2" required={true} />
      <TextField
        type="text"
        onChange={formik.handleChange}
        placeholder="Address Line 2"
        name="addressLine2"
        value={formik.values.addressLine2}
        sx={customTextField}
        error={
          formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
        }
        helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
      />
    </Grid>
  );
};

export default AddresLine2;
