import { Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ListItem } from "@/components";
import styles from "./login.module.scss";
import {
  servicesList,
  description,
  welcomeTitle,
  serviceTitle,
} from "./constants";
import useAuthStore from "@/hooks/useAuthStore";
import { useEffect } from "react";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const token = useAuthStore((state: any) => state.token);
  useEffect(() => {
    console.log('token post logout: ', token);
  }, [token]);  // Se ejecuta solo cuando 'token' cambia


  return (
    <Grid container style={{ width: "100%", margin: 0 }}>
      <Grid xs={12} lg={6}>
        <Box className={styles["welcome-container"]}>
          <Box className={styles["background-image"]} sx={{ paddingBottom: '1rem' }}>
            <Typography className={styles["text"]}>{welcomeTitle}</Typography>
            <Typography className={styles["description"]}>{description}</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid xs={12} lg={6}>
        <Box className={styles["services-container"]} sx={{ padding: isMobile ? '1rem' : '2rem 4rem 0 6rem' }}>
          <Typography className={styles["upper-text-title"]} sx={{ textAlign: isMobile ? 'center' : 'start' }}>{serviceTitle}</Typography>
          <Typography variant="h6" sx={{ marginBottom: '2rem !important' }} >Log In or register to start requesting services</Typography>
          {servicesList?.map((service) => (
            <ListItem
              key={service.number}
              number={service.number}
              listItem={service.listItem}
              description={service.description}
              url={service.url}
              note={service.note}
            />
          ))}
        </Box>
      </Grid>
    </Grid>

  );
};


export default Login;
