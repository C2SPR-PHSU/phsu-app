import { Grid, Box, Typography } from "@mui/material";
import { ListItem } from "@/components";

const Documents = ({ title }: {title: string}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>BUTTONS</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>CHECK</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Documents;
