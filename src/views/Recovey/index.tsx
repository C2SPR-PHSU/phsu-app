import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import styles from "./styles.module.scss";

import CustomLabel from "@/components/CustomLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recovery = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRecoverClick = () => {
    // Aquí puedes realizar la lógica para procesar el email recuperado
    console.log("Email recovered:", email);
    setEmail("");
  };

  const handleCancelClick = () => {
    // Aquí puedes realizar la lógica para cancelar la operación de recuperación
    setEmail("");
    navigate("/");
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
                    sx={{
                      width: "100%",
                    }}
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
                  onClick={handleRecoverClick}
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
