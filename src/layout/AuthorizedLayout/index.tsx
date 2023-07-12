import { Grid } from "@mui/material";
import { Sidebar, Footer } from "@/layout";
import { Outlet } from "react-router-dom";
import AlertPopup from "@/components/AlertPopup";

const AuthorizedLayout = () => {
  return (
    <Grid container>
      <AlertPopup />
      <Grid item xs={12} md={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={11}>
        <Outlet />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default AuthorizedLayout;
