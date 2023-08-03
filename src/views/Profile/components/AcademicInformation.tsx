import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const AcademicInformation = ({ isEditMode, formik }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
      <Typography
        variant="h5"
        className={profileScss["title-address-information"]}
        sx={{ paddingBottom: '1rem' }}
      >
        Academic Information
      </Typography>
    {
      !isEditMode ? (
        <>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Entrance Academic Year: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Campus: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Entrance Term: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.birthdate}</Typography>
          </Box>
        </> 
      ) : (
        <>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Entrance Academic Year: &nbsp;</Typography>
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
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Campus: &nbsp;</Typography>
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
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Entrance Term: &nbsp;</Typography>
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
  );
};

export default AcademicInformation;