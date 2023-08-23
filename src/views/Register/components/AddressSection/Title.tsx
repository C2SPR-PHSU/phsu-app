import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SectionTitle = ({ title }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
    </Grid>
  );
};

export default SectionTitle;
