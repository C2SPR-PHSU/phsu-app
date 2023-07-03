import { Box, Grid, Typography, Button } from "@mui/material";
import NoPage404 from "../../assets/500.png";
import { ErrorRespond500 } from "./object";
import { useNavigate } from "react-router-dom";
import styles from "./StyleError500.module.scss";

const Error404 = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "7%",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20%",
          width: "100%", // Añadido para ocupar todo el ancho del padre
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <Box sx={{ width: "65%", paddingTop: "13%" }}>
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
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "20rem",
            }}
          >
            <img
              src={NoPage404}
              alt="Error 404"
              style={{
                maxWidth: "447px",
              }}
            />
          </Box>
        </Grid>

        {/*  */}

        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
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
  );
};

export default Error404;
