import { Grid, Box, Typography, TextField } from "@mui/material";
import styles from './styles.module.scss'
import { ChangeEvent } from "react";
import CustomLabel from "@/components/CustomLabel";

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

const Recovery = () => {
  const handleValueChange = (name: string, newValue: string) => {
    // Lógica para manejar el cambio de valor
    console.log(`El campo ${name} tiene el nuevo valor: ${newValue}`);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={styles["recovery-container"]}>
            <Box className={styles["background-image"]}></Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex" }} className={styles["container-recovey"]}>
            <Box>
              <Typography className={styles["title-recovery"]}>Password Recovery</Typography>

              <Typography>
                Don't worry, we'll send a link to your email where you can reset your password.
              </Typography>
              <CustomLabel name="Second Last Name" required={false} />
              <Grid item xs={12} md={6}>
              <MyTextField
                name="myField"
                placeholder="Ingrese un valor"
                value=""
                onValueChange={handleValueChange}
              />
              </Grid>
            </Box>

          
              
            
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recovery;
