import { Grid, Box, Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';

const Documents = ({ title }: {title: string}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <UploadIcon sx={{color: "#009999"}} />
            <DeleteIcon sx={{color: "rgba(0, 168, 168, 0.42)"}} />
            <VisibilityIcon sx={{color: "rgba(0, 168, 168, 0.42)"}} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <CheckIcon sx={{ color: '#f7941d', textAlign: 'center'}} />
        </Grid>
      </Grid>
    </>
  );
};

export default Documents;
