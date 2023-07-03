import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import styles from "./styles.module.scss";

import CustomLabel from "@/components/CustomLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ApiRequest from "@/utils/services/apiService";

const recoveryRequest = {
  token: "",
  email: "",
};

const Recovery = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendRecoveryRequest = async () => {
    console.log(recoveryRequest);
    recoveryRequest.email = email;
    setEmail("");

    const api = new ApiRequest();
    api.resource = "/recovery";
    try {
      const response = await api.post({
        body: recoveryRequest,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setEmail("");
    navigate("/");
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

              <Box className={styles["box-recovery"]}>
                <CustomLabel name="Email" required={true} />
                <Grid item xs={12} md={10}>
                  <TextField
                    id="email"
                    placeholder="example@example.com"
                    type="email"
                    value={email}
                    onChange={handleEmailInputChange}
                    sx={customTextField}
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
                <Button
                  className={styles["button-recover"]}
                  onClick={sendRecoveryRequest}
                >
                  Recover
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recovery;
