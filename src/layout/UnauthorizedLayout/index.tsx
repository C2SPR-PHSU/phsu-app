import { Grid, Box, Typography } from "@mui/material";
import { Header, Footer } from "@/layout";
import { Outlet } from "react-router-dom";

const UnautoziredLayout = () => {
  return (
    <Grid>
      <Header />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default UnautoziredLayout;
