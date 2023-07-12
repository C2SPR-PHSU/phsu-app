import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import styles from "./styles.module.scss";

import CustomLabel from "@/components/CustomLabel";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ApiRequest from "@/utils/services/apiService";

const Recovery = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .max(100, "Email must be at most 100 characters"),
    }),

    onSubmit: (values) => {
      const recoveryRequest = {
        email: values.email,
      };

      const api = new ApiRequest();
      api.resource = "/recovery";
      try {
        const response = api.post({
          body: recoveryRequest,
        });
        console.log(response);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Button Cancel
  const handleCancelClick = () => {
    navigate("/");
  };

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
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={styles["recovery-container"]}>
            <Box className={styles["background-image"]}></Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: "flex", gap: "1rem" }}
            className={styles["container-recovey"]}
          >
            <Box>
              <Typography className={styles["title-recovery"]}>
                Password Recovery
              </Typography>

              <Typography className={styles["descriptions-recovery"]}>
                Don't worry, we'll send a link to your email where you can reset
                your password.
              </Typography>

              <form onSubmit={formik.handleSubmit}>
                <Box className={styles["box-recovery"]}>
                  <CustomLabel name="Email" required={true} />
                  <Grid item xs={12} md={10}>
                    <TextField
                      id="email"
                      placeholder="example@example.com"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      sx={customTextField}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Box>

                <Box className={styles["box-buttons"]}>
                  <Button
                    variant="outlined"
                    className={styles["button-cancel"]}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className={styles["button-recover"]}>
                    Recover
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recovery;
