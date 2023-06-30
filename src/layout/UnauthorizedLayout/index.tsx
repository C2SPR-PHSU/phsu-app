import { Grid } from "@mui/material";
import { Header, Footer } from "@/layout";
import { Outlet } from "react-router-dom";
import Alert from "@/components/AlertPopup";

const UnautoziredLayout = () => {
  return (
    <Grid>
      <Alert />
      <Header />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default UnautoziredLayout;
