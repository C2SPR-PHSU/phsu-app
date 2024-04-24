import { Box, Grid } from "@mui/material";
import { Header, Footer } from "@/layout";
import { Outlet } from "react-router-dom";
import AlertPopup from "@/components/AlertPopup";
import styles from "./styles.module.scss";

const UnautoziredLayout = () => {
  return (
    // <Grid container sx={{ height: '100%', width: '100%', flexGrow: 1 }}>

    //   <AlertPopup />

    //   <Grid item xs={12} sx={{ display: 'flex', flex: 'column', alignItems: 'start', background: 'red', maxHeight: '5vh' }}>
    //     <Header />
    //   </Grid>

    //   <Grid item xs={12} sx={{ flexGrow: 1, display: 'flex', flex: 'column', alignItems: 'start', background: 'blue', maxHeight: '70vh' }}>
    //     <Outlet />
    //   </Grid>

    //   <Grid item xs={12} sx={{ display: 'flex', flex: 'column', alignItems: 'end', background: 'yellow', maxHeight: '10vh' }}>
    //    <Footer />
    //   </Grid>
    // </Grid>

    <>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', height: '100%' }}>
        <AlertPopup />

        {/* Header */}
        <Box sx={{ bgcolor: '#727caa', flexGrow: 0 }}>
          <Header />
        </Box>
        {/* <div className="header-container">
          <Header />

        </div> */}
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </Box>


        <Box className="footer-container" sx={{ flexGrow: 0 }}>
          <Footer />
        </Box>
      </Box >

    </>

  );
};



export default UnautoziredLayout;
