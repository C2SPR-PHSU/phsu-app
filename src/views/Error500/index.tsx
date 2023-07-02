import { Box, Grid, Typography, Button } from "@mui/material";
import NoPage404 from "../../assets/500.png";
import { ErrorRespond500 } from "./object";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./StyleError500.module.scss";
import { useNavigate } from "react-router-dom";

const Error500 = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "10rem",
          marginLeft: "10rem",
          marginRight: "10rem",
        }}
      >
        {/* <------------------------ ERROR DESCRIPTIONS --------------------------> */}
        <Grid
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          container
          lg={12}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: "3rem",
                marginRight: "3rem",
                justifyContent: "end",
                flexDirection: "row",
                display: "flex",

                ...(isScreenSmall && {
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "row",
                  marginRight: "3rem",
                }),
              }}
            >
              <Box className={styles["container-description-error"]}>
                <Typography className={styles["title-500"]}>
                  {ErrorRespond500.code}
                </Typography>
                <Typography className={styles["sub-title"]}>
                  {ErrorRespond500.title}
                </Typography>
                <Typography className={styles["error-descriptions"]}>
                  {ErrorRespond500.description}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* <---------------------------- IMAGE ERROR --------------------------------> */}
          <Grid xs={12} md={6}>
            <Box
              className={styles["img-error"]}
              sx={{
                ...(isScreenSmall && {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }),
              }}
            >
              <img
                src={NoPage404}
                className={styles["img-error"]}
                style={{
                  width: "50%",
                  height: "50%",
                  ...(isScreenSmall && {
                    height: "90%",
                    width: "90%",
                  }),
                }}
              />
            </Box>
          </Grid>

          {/* <---------------------------- BUTTONS ---------------------------------> */}

          <Box
            sx={{
              width: "17%",
              //   backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              ...(isScreenSmall && {
                width: "50%",
              }),
            }}
          >
            <Grid
              container
              sx={{
                ...(isScreenSmall && {
                  gap: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  //   backgroundColor: "red",
                }),
              }}
            >
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  className={styles["button-page-main"]}
                  onClick={handleCancelClick}
                >
                  Go to the main page
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Error500;
