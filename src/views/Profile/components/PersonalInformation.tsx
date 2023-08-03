import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const PersonalInformation = ({ isEditMode, formik }) => {
  return (
    <Grid container xs={12} sm={6} md={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
      {
        !isEditMode ? (
          <>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography>First Name: &nbsp;</Typography>  
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.firstname}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography>Middle Name: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.middlename}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography>Last Name: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.lastname}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
            <Typography>Second Last Name: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.secondlastname}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography>Student ID: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.studentid}</Typography>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>First Name: &nbsp;</Typography>  
              <TextField
                id="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && !!formik.errors.firstname}
                helperText={formik.touched.firstname && formik.errors.firstname}
                sx={customTextField}
              />
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Middle Name: &nbsp;</Typography>
              <TextField
                id="middlename"
                name="middlename"
                value={formik.values.middlename}
                onChange={formik.handleChange}
                error={formik.touched.middlename && !!formik.errors.middlename}
                helperText={
                  formik.touched.middlename && formik.errors.middlename
                }
                sx={customTextField}
              />
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Last Name: &nbsp;</Typography>
              <TextField
                id="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && !!formik.errors.lastname}
                helperText={formik.touched.lastname && formik.errors.lastname}
                sx={customTextField}
              />
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Second Last Name: &nbsp;</Typography>
              <TextField
                id="secondlastname"
                name="secondlastname"
                value={formik.values.secondlastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.secondlastname &&
                  !!formik.errors.secondlastname
                }
                helperText={
                  formik.touched.secondlastname && formik.errors.secondlastname
                }
                sx={customTextField}
              />
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Student ID: &nbsp;</Typography>
              <TextField
                id="studentid"
                name="studentid"
                value={formik.values.studentid}
                onChange={formik.handleChange}
                error={formik.touched.studentid && !!formik.errors.studentid}
                helperText={formik.touched.studentid && formik.errors.studentid}
                sx={customTextField}
              />
            </Box>
          </>
        )
      }
      </Box>
    </Grid>
  );
};

export default PersonalInformation;