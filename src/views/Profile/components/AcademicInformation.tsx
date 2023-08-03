import {
  Grid,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const AcademicInformation = ({ isEditMode, formik }) => {
  return (
    <Grid container xs={12} sm={6} md={6}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          className={profileScss["title-address-information"]}
        >
          Academic Information
        </Typography>
      </Grid>
      {
        !isEditMode ? (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Entrance Academic Year:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Campus:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Entrance Term:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Entrance Academic Year:</Typography>
                <TextField
                  id="birthdate"
                  name="birthdate"
                  value={formik.values.birthdate}
                  onChange={formik.handleChange}
                  error={formik.touched.birthdate && !!formik.errors.birthdate}
                  helperText={formik.touched.birthdate && formik.errors.birthdate}
                  sx={customTextField}
                  type="date"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Campus:</Typography>
                <TextField
                  id="birthdate"
                  name="birthdate"
                  value={formik.values.birthdate}
                  onChange={formik.handleChange}
                  error={formik.touched.birthdate && !!formik.errors.birthdate}
                  helperText={formik.touched.birthdate && formik.errors.birthdate}
                  sx={customTextField}
                  type="date"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Entrance Term:</Typography>
                <TextField
                  id="birthdate"
                  name="birthdate"
                  value={formik.values.birthdate}
                  onChange={formik.handleChange}
                  error={formik.touched.birthdate && !!formik.errors.birthdate}
                  helperText={formik.touched.birthdate && formik.errors.birthdate}
                  sx={customTextField}
                  type="date"
                />
              </Box>
            </Grid>
          </>
        )
      }
    </Grid>
  );
};

export default AcademicInformation;
