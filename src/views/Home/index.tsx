import { useState } from 'react';
import { Grid, Typography, Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import BasicTable from "./components/Table";
import useAlert from "@/hooks/useAlert";
import RequiredDocuments from './components/RequiredDocuments'

const Home = () => {
  const { setAlert } = useAlert();
  const [openModal, setOpenModal] = useState(false)

  return (
    <Grid container sx={{ minHeight: '90vh' }}>
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
          {/* <Button
            variant="contained"
            onClick={() => setAlert('loool', 'success')}
          >
            TOAST
          </Button> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className={styles["description"]}>
            Review your service request status and any pending actions.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ padding: "2rem 0" }}>
          <BasicTable />
          <RequiredDocuments open={openModal} handleClose={() => setOpenModal(false)} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
