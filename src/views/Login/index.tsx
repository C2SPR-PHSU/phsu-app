import { Grid, Box, Typography } from "@mui/material";
import { ListItem } from "@/components";
import styles from "./login.module.scss";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";
import {
  servicesList,
  description,
  welcomeTitle,
  serviceTitle,
} from "./constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const theme = createTheme({
    transitions: {
      duration: {
        enteringScreen: 230,
        leavingScreen: 230,
      },
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  });

  useEffect(() => {
    if (!checked) {
      const timeoutId = setTimeout(() => {
        setChecked(true);
      }, 5);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [checked]);

  return (
    <ThemeProvider theme={theme}>
      <Fade in={checked}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className={styles["welcome-container"]}>
              <Box className={styles["background-image"]}>
                <Typography className={styles["text"]}>
                  {welcomeTitle}
                </Typography>
                <Typography className={styles["description"]}>
                  {description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} className={styles["services-container"]}>
              <Typography className={styles["upper-text-title"]}>
                {serviceTitle}
              </Typography>
              {servicesList?.map((service) => {
                return (
                  <ListItem
                    key={service.number}
                    number={service.number}
                    listItem={service.listItem}
                    description={service.description}
                    url={service.url}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </ThemeProvider>
  );
};

export default Login;
