import { Grid, Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} className={styles["image-banner"]}>
        <Box className={styles["text-container"]}>
          <Typography variant="h3">Services Dashboard</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Home;
