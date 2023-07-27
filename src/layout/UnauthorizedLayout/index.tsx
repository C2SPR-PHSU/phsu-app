import { Grid } from "@mui/material";
import { Header, Footer } from "@/layout";
import { Outlet } from "react-router-dom";
import AlertPopup from "@/components/AlertPopup";

const UnautoziredLayout = () => {
  return (
    <Grid>
      <AlertPopup />
      <Header />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default UnautoziredLayout;
