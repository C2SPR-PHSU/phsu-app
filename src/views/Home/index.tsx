import { useState } from 'react';
import { Grid, Typography, Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import BasicTable from "./components/table/index";
import useAlert from "@/hooks/useAlert";
import RequiredDocuments from './components/RequiredDocuments'

const Home = () => {
  const { setAlert } = useAlert();
  const [openModal, setOpenModal] = useState(false)
  const [docTitle, setDocTitle] = useState('')
  const [campusId, setCampusId] = useState('')

  const handleModal = (prop: string) => {
    setDocTitle(prop)
    setOpenModal(true)
  }

  return (
    <Grid container sx={{ minHeight: "90vh" }}>
      <Grid item xs={12} className={styles["image-banner"]}>
        <Box className={styles["text-container"]}>
          {/* <Typography variant="h3" className={styles["title"]}>
            Services Dashboard
          </Typography> */}
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
          <BasicTable
            handleModal={(prop) => handleModal(prop)}
            setDocumentId={(prop) => setCampusId(prop)}
          />
          <RequiredDocuments
            title={docTitle}
            open={openModal}
            campusId={campusId}
            handleClose={() => setOpenModal(false)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
