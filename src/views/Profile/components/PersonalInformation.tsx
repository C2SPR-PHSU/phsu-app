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

const PersonalInformation = ({ isEditMode, formik }) => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <List>
        {/*First Name item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            First Name:
          </div>

          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && !!formik.errors.firstname}
                helperText={formik.touched.firstname && formik.errors.firstname}
                sx={customTextField}
              />
            </div>
          ) : (
            <ListItemText
              primary={formik.values.firstname}
              sx={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .listItemTextstyle
              }
            />
          )}
        </ListItem>

        {/*Middlename item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Middle Name:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
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
            </div>
          ) : (
            <div>{formik.values.middlename}</div>
          )}
        </ListItem>

        {/*lastname item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Last Name:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && !!formik.errors.lastname}
                helperText={formik.touched.lastname && formik.errors.lastname}
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.lastname}</div>
          )}
        </ListItem>

        {/*Second lastname item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Second lastname:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
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
            </div>
          ) : (
            <div>{formik.values.secondlastname}</div>
          )}
        </ListItem>

        {/*studentid item */}
        <ListItem
          sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).listItem}
        >
          <div style={sxStyles(null, null, null).listItemNameLg}>
            Student ID:
          </div>
          {isEditMode ? (
            <div
              style={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .textFieldSeparator
              }
            >
              <TextField
                id="studentid"
                name="studentid"
                value={formik.values.studentid}
                onChange={formik.handleChange}
                error={formik.touched.studentid && !!formik.errors.studentid}
                helperText={formik.touched.studentid && formik.errors.studentid}
                sx={customTextField}
              />
            </div>
          ) : (
            <div>{formik.values.studentid}</div>
          )}
        </ListItem>
      </List>
    </Grid>
  );
};

export default PersonalInformation;
