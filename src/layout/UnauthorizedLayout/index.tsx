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
      <Box sx={{ width: '100% !important' }}>
        <AlertPopup />

        {/* Header */}
        <Box sx={{ bgcolor: '#727caa' }}>
          <Header />
        </Box>
        {/* <div className="header-container">
          <Header />
        </div> */}

        <Box className="outlet-container">
          <Outlet />
        </Box>

        <Box className="footer-container">
          <Footer />
        </Box>
      </Box >

    </>

  );
};



export default UnautoziredLayout;
