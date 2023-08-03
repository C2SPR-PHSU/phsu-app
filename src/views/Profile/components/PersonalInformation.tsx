import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const PersonalInformation = ({ isEditMode, formik }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
    {
      !isEditMode ? (
        <>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>First Name: &nbsp;</Typography>  
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.first_name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Middle Name: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.middle_name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Last Name: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.last_name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
          <Typography>Second Last Name: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.second_last_name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Student ID: &nbsp;</Typography>
            <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.student_id}</Typography>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
            <Typography>First Name: &nbsp;</Typography>  
            <TextField
              id="first_name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.touched.first_name && !!formik.errors.first_name}
              helperText={formik.touched.first_name && formik.errors.first_name}
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
            <Typography>Middle Name: &nbsp;</Typography>
            <TextField
              id="middle_name"
              name="middle_name"
              value={formik.values.middle_name}
              onChange={formik.handleChange}
              error={formik.touched.middle_name && !!formik.errors.middle_name}
              helperText={
                formik.touched.middle_name && formik.errors.middle_name
              }
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
            <Typography>Last Name: &nbsp;</Typography>
            <TextField
              id="last_name"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.touched.last_name && !!formik.errors.last_name}
              helperText={formik.touched.last_name && formik.errors.last_name}
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
            <Typography>Second Last Name: &nbsp;</Typography>
            <TextField
              id="second_last_name"
              name="second_last_name"
              value={formik.values.second_last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.second_last_name &&
                !!formik.errors.second_last_name
              }
              helperText={
                formik.touched.second_last_name && formik.errors.second_last_name
              }
              sx={customTextField}
            />
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
            <Typography>Student ID: &nbsp;</Typography>
            <TextField
              id="student_id"
              name="student_id"
              value={formik.values.student_id}
              onChange={formik.handleChange}
              error={formik.touched.student_id && !!formik.errors.student_id}
              helperText={formik.touched.student_id && formik.errors.student_id}
              sx={customTextField}
            />
          </Box>
        </>
      )
    }
    </Box>
  );
};

export default PersonalInformation;