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
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.entrance_year}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Campus: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.campus}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Entrance Term: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.entrance_terms}</Typography>
          </Box>
        </> 
      ) : (
        <>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Entrance Academic Year: &nbsp;</Typography>
            <TextField
              id="entrance_year"
              name="entrance_year"
              value={formik.values.entrance_year}
              onChange={formik.handleChange}
              error={formik.touched.entrance_year && !!formik.errors.entrance_year}
              helperText={formik.touched.entrance_year && formik.errors.entrance_year}
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Campus: &nbsp;</Typography>
            <TextField
              id="campus"
              name="campus"
              value={formik.values.campus}
              onChange={formik.handleChange}
              error={formik.touched.campus && !!formik.errors.campus}
              helperText={formik.touched.campus && formik.errors.campus}
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>  
            <Typography>Entrance Term: &nbsp;</Typography>
            <TextField
              id="entrance_terms"
              name="entrance_terms"
              value={formik.values.entrance_terms}
              onChange={formik.handleChange}
              error={formik.touched.entrance_terms && !!formik.errors.entrance_terms}
              helperText={formik.touched.entrance_terms && formik.errors.entrance_terms}
              sx={customTextField}
            />
          </Box>
        </>
      )
    }
    </Box>
  );
};

export default AcademicInformation;