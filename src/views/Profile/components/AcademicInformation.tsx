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

const AcademicInformation = ({ isEditMode, formik }) => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Typography
        variant="h6"
        className={profileScss["title-academic-information"]}
      >
        Academic Information
      </Typography>
      <List>
        {/*Birthdate item */}
        <ListItem>
          <div
            style={
              sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItemNameLg
            }
          >
            Date or Birth:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
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
            </div>
          ) : (
            <div>{formik.values.birthdate}</div>
          )}
        </ListItem>

        {/*phonenumber item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Phone number:
          </div>

          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="cell_phone"
                name="cell_phone"
                value={formik.values.cell_phone}
                onChange={formik.handleChange}
                error={formik.touched.cell_phone && !!formik.errors.cell_phone}
                helperText={
                  formik.touched.cell_phone && formik.errors.cell_phone
                }
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.cell_phone}</div>
          )}
        </ListItem>

        {/*Alternative phonenumber */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Alternative Phone:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="alternative_phone"
                name="alternative_phone"
                value={formik.values.alternative_phone}
                onChange={formik.handleChange}
                error={
                  formik.touched.alternative_phone &&
                  !!formik.errors.alternative_phone
                }
                helperText={
                  formik.touched.alternative_phone &&
                  formik.errors.alternative_phone
                }
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.alternative_phone}</div>
          )}
        </ListItem>

        {/*Email */}
        <ListItem>
          <div
            style={
              sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItemNameLg
            }
          >
            Personal Email:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.email}</div>
          )}
        </ListItem>

        {/*Institucional email item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div
            style={
              sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItemNameLg
            }
          >
            Institucional Email:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="institucional_email"
                name="institucional_email"
                value={formik.values.institucional_email}
                onChange={formik.handleChange}
                error={
                  formik.touched.institucional_email &&
                  !!formik.errors.institucional_email
                }
                helperText={
                  formik.touched.institucional_email &&
                  formik.errors.institucional_email
                }
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.institucional_email}</div>
          )}
        </ListItem>
      </List>
    </Grid>
  );
};

export default AcademicInformation;
