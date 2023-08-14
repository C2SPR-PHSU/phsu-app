import { Grid } from "@mui/material";
import { Header, Footer } from "@/layout";
import { Outlet } from "react-router-dom";
import AlertPopup from "@/components/AlertPopup";
import styles from "./styles.module.scss";

const UnautoziredLayout = () => {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className={styles.soujitest}>
      <AlertPopup />

      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'start', minHeight: '5vh' }}>
        <Header />
      </Grid>

      <Grid item xs={12} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', minHeight: '85vh' }}>
        <Outlet />
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', minHeight: '10vh', height: '10vh' }}>
        <Footer />
      </Grid>
    </Grid>
  );
};



export default UnautoziredLayout;
