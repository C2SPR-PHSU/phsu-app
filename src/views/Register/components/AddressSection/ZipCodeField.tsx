import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { CustomLabel } from "@/components";
const ZipCodeField = ({ formik }) => {
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
      <CustomLabel name="Zip Code" required={true} />
      <TextField
        type="text"
        onChange={formik.handleChange}
        placeholder="Address Zipcode"
        name="addressZipcode"
        value={formik.values.addressZipcode}
        sx={customTextField}
        error={
          formik.touched.addressZipcode && Boolean(formik.errors.addressZipcode)
        }
        helperText={
          formik.touched.addressZipcode && formik.errors.addressZipcode
        }
      />
    </Grid>
  );
};

export default ZipCodeField;
