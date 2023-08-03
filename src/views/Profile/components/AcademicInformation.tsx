import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const AcademicInformation = ({ isEditMode, formik }) => {
  return (
    <Grid container xs={12} sm={6} md={6} sx={{ paddingTop: '2rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <Typography
          variant="h5"
          className={profileScss["title-address-information"]}
        >
          Academic Information
        </Typography>
      {
        !isEditMode ? (
          <>
            <Box sx={{ display: 'flex'}}>
              <Typography>Entrance Academic Year:</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
            </Box>
            <Box sx={{ display: 'flex'}}>
              <Typography>Campus:</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
            </Box>
            <Box sx={{ display: 'flex'}}>
              <Typography>Entrance Term:</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
            </Box>
          </> 
        ) : (
          <>
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
          </>
        )
      }
      </Box>
    </Grid>
  );
};

export default AcademicInformation;