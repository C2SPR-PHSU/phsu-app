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
import profileScss from "../../Profile/profile.module.scss";
import customTextField from "../sxTexField";
const AddressInformation = ({ isEditMode, formik }) => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <List>
        <Typography
          variant="h6"
          className={profileScss["title-address-information"]}
        >
          Address
        </Typography>

        {/* Line 1 item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>Line 1:</div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="line1"
                name="line1"
                value={formik.values.line1}
                onChange={formik.handleChange}
                error={formik.touched.line1 && !!formik.errors.line1}
                helperText={formik.touched.line1 && formik.errors.line1}
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.line1}</div>
          )}
        </ListItem>

        {/* Line 2 item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div
            style={
              sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItemNameLg
            }
          >
            Line 3:{" "}
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="line2"
                name="line2"
                value={formik.values.line2}
                onChange={formik.handleChange}
                error={formik.touched.line2 && !!formik.errors.line2}
                helperText={formik.touched.line2 && formik.errors.line2}
                sx={customTextField}
              />
            </div>
          ) : (
            <ListItemText
              primary={formik.values.line2}
              sx={{
                flex: 1,
              }}
            />
          )}
        </ListItem>

        {/* City item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>City: </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && !!formik.errors.city}
                helperText={formik.touched.city && formik.errors.city}
                sx={customTextField}
              />
            </div>
          ) : (
            <ListItemText
              primary={formik.values.city}
              sx={{
                flex: 1,
              }}
            />
          )}
        </ListItem>

        {/* State item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>State:</div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && !!formik.errors.state}
                helperText={formik.touched.state && formik.errors.state}
                sx={customTextField}
              />
            </div>
          ) : (
            <ListItemText
              primary={formik.values.state}
              sx={{
                flex: 1,
                paddingRight: "10rem",
              }}
            />
          )}
        </ListItem>

        {/* Zip Code item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>Zip code:</div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="zipcode"
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                error={formik.touched.zipcode && !!formik.errors.zipcode}
                helperText={formik.touched.zipcode && formik.errors.zipcode}
                sx={customTextField}
              />
            </div>
          ) : (
            <ListItemText
              primary={formik.values.zipcode}
              sx={{
                flex: 1,
              }}
            />
          )}
        </ListItem>
      </List>
    </Grid>
  );
};

export default AddressInformation;
