import { Grid, Box, Typography } from "@mui/material";
import { ListItem } from "@/components";
import styles from "./login.module.scss";
import {
  servicesList,
  description,
  welcomeTitle,
  serviceTitle,
} from "./constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Login = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={styles["welcome-container"]}>
            <Box className={styles["background-image"]}>
              <Typography className={styles["text"]}>{welcomeTitle}</Typography>
              <Typography className={styles["description"]}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            item
            xs={12}
            className={styles["services-container"]}
            sx={{
              ...(isScreenSmall && {
                padding: "0",
                paddingLeft: "1rem",
              }),
            }}
          >
            <Typography
              className={styles["upper-text-title"]}
              sx={{
                fontSize: "40px",
                ...(isScreenSmall && {
                  fontSize: "30px",
                  paddingTop: "1rem",
                  paddingLeft: "1rem",
                }),
              }}
            >
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
    </>
  );
};

export default Login;
