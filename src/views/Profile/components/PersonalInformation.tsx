import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const PersonalInformation = ({ isEditMode, formik }) => {
  return (
    <Grid container xs={12} sm={6} md={6}>
      {
        !isEditMode ? (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>First Name:</Typography>  
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.firstname}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Middle Name:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.middlename}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Last Name:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.lastname}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
              <Typography>Second Last Name:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.secondlastname}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Student ID:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.studentid}</Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>First Name:</Typography>  
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Middle Name:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Last Name:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Second Last Name:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Student ID:</Typography>
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
            </Grid>
          </>
        )
      }
    </Grid>
  );
};

export default PersonalInformation;