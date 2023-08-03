import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const AddressInformation = ({ isEditMode, formik }) => {

  return (
    <Grid container xs={12} sm={6} md={6} sx={{ paddingTop: '2rem', paddingRight: '3rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <Typography
          variant="h5"
          className={profileScss["title-address-information"]}
          sx={{ paddingBottom: '1rem' }}
        >
          Address
        </Typography>
      {
        !isEditMode ? (
          <>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography sx={{ width: '100%' }}>Line 1: &nbsp;</Typography>
              <Typography sx={formik.values.line1.length > 50 && { lineBreak: 'anywhere'}}>{formik.values.line1}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography sx={{ width: '100%' }}>Line 2: &nbsp;</Typography>
              <Typography sx={formik.values.line2.length > 50 && {lineBreak: 'anywhere'}}>{formik.values.line2}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography sx={{ width: '100%' }}>City: &nbsp;</Typography>
              <Typography>{formik.values.city}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography sx={{ width: '100%' }}>State: &nbsp;</Typography>
              <Typography>{formik.values.state}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem'}}>
              <Typography sx={{ width: '100%' }}>Zip code: &nbsp;</Typography>
              <Typography>{formik.values.zipcode}</Typography>
            </Box>
          </>
        ) : (
          <>
            
              <Box sx={{ display: 'flex'}}>
                <Typography>Line 1: &nbsp;</Typography>
                <TextField
                  id="line1"
                  name="line1"
                  value={formik.values.line1}
                  onChange={formik.handleChange}
                  error={formik.touched.line1 && !!formik.errors.line1}
                  helperText={formik.touched.line1 && formik.errors.line1}
                  sx={customTextField}
                />
              </Box>
              <Box sx={{ display: 'flex'}}>
                <Typography>Line 2: &nbsp;</Typography>
                <TextField
                  id="line2"
                  name="line2"
                  value={formik.values.line2}
                  onChange={formik.handleChange}
                  error={formik.touched.line2 && !!formik.errors.line2}
                  helperText={formik.touched.line2 && formik.errors.line2}
                  sx={customTextField}
                />
              </Box>
              <Box sx={{ display: 'flex'}}>
                <Typography>City: &nbsp;</Typography>
                <TextField
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && !!formik.errors.city}
                  helperText={formik.touched.city && formik.errors.city}
                  sx={customTextField}
                />
              </Box>
              <Box sx={{ display: 'flex'}}>
                <Typography>State: &nbsp;</Typography>
                <TextField
                  id="state"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && !!formik.errors.state}
                  helperText={formik.touched.state && formik.errors.state}
                  sx={customTextField}
                />
              </Box>
              <Box sx={{ display: 'flex'}}>
                <Typography>Zip code: &nbsp;</Typography>
                <TextField
                  id="zipcode"
                  name="zipcode"
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  error={formik.touched.zipcode && !!formik.errors.zipcode}
                  helperText={formik.touched.zipcode && formik.errors.zipcode}
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

export default AddressInformation;