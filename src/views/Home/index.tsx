import { Grid, Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import BasicTable from "./components/table/index";

const Home = () => {
  return (
    <Grid container sx={{ minHeight: "90vh" }}>
      <Grid item xs={12} className={styles["image-banner"]}>
        <Box className={styles["text-container"]}>
          <Typography variant="h3" className={styles["title"]}>
            Services Dashboard
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        py={4}
        px={8}
        className={styles["information-container"]}
      >
        <Grid item xs={12}>
          <Typography variant="h5" className={styles["subtitle"]}>
            Requested Services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className={styles["description"]}>
            Review your service request status and any pending actions.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ padding: "2rem 0" }}>
          <BasicTable />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
