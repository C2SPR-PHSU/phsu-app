import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { CustomLabel } from "@/components";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from './form.module.scss'
const PasswordField = ({
  formik,
  showPassword,
  handleTogglePasswordVisibility,
}) => {
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
      <CustomLabel name="Password" required={true} />
      <TextField
        sx={customTextField}
        placeholder="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <IconButton onClick={handleTogglePasswordVisibility}
               edge="end"  >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
/>


      {formik.touched.password && formik.errors.password && (
        <p style={{ color: "red", fontWeight: "lighter", fontSize:12 }}>
        {formik.errors.password}
        </p>
      )}
    </Grid>
  );
};

export default PasswordField;
