import {
  Box,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
  ListItemText,
} from "@mui/material";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";

const AddressInformation = ({ isEditMode, formik }) => {

  return (
    <Grid container xs={12} sm={6} md={6} sx={{ paddingRight: '3rem' }}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          className={profileScss["title-address-information"]}
        >
          Address
        </Typography>
      </Grid>
      {
        !isEditMode ? (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography sx={{ width: '100%' }}>Line 1:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.line1}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography sx={{ width: '100%' }}>Line 2:</Typography>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.line2}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Grid item xs={2}>City:</Grid>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.city}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Grid item xs={2}>State:</Grid>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.state}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Grid item xs={2}>Zip code:</Grid>
                <Typography sx={{ lineBreak: 'anywhere'}}>{formik.values.zipcode}</Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Line 1:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Line 2:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Typography>Line 2:</Typography>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Grid item xs={2}>State:</Grid>
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
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex'}}>
                <Grid item xs={2}>Zip code:</Grid>
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
            </Grid>
          </>
        )
      }
    </Grid>
  );
};

export default AddressInformation;
