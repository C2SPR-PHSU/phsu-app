import {
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import profileScss from "./Profile.module.scss";
import sxStyles from "./ItemSx";
import { Sidebar } from "@/layout";
import { UserProfile } from "./users";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useFormik } from "formik";
import customTextField from "./sxTexField";
import { useState } from "react";

const Profile = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [isEditMode, setIsEditMode] = useState(false);

  const editMode = () => {
    setIsEditMode(!isEditMode);
  };

  const formik = useFormik({
    initialValues: {
      firstname: UserProfile.first_name,
      middlename: UserProfile.middle_name,
      lastname: UserProfile.last_name,
      secondlastname: UserProfile.second_last_name,
      studentid: UserProfile.student_id,
      birthdate: UserProfile.birthdate,
      cell_phone: UserProfile.cell_phone,
      alternative_phone: UserProfile.alternative_phone,
      email: UserProfile.email,
      institucional_email: UserProfile.institucional_email,
      entranceYear: UserProfile.entrance_year,
      campusMain: UserProfile.campus,
      entranceTerm: UserProfile.entrance_terms,
      line1: UserProfile.address_line1,
      line2: UserProfile.address_line2,
      city: UserProfile.address_city,
      state: UserProfile.address_city,
      zipcode: UserProfile.address_zipcode,
      program: UserProfile.program,
    },
    //validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsEditMode(false);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/*Mostramos sidebar */}
        <Box sx={{ display: "flex" }}>
          <Box
            sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).sidebarBox}
          >
            <Sidebar />
          </Box>

          {/*Items, Photo and Buttons content (Box main)  */}
          <Box sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxMain}>
            {/*Box de foto y botones */}
            <Box
              sx={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxButtoPhoto
              }
            >
              <Grid
                container
                sx={
                  sxStyles(isVeryScreenSmall, isMedium, null).containButtonPhoto
                }
              >
                {/*Profile title */}
                <Typography
                  variant="h4"
                  className={profileScss["title"]}
                  sx={{
                    ...(isVeryScreenSmall && {
                      textAlign: "center",
                      paddingLeft: "28%",
                    }),
                  }}
                >
                  Profile
                </Typography>

                {/*Photo */}
                <Grid
                  item
                  sx={sxStyles(isVeryScreenSmall, null, null).itemPhoto}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    alt="user-photo"
                    className={profileScss["imgProfileStyle"]}
                  />
                </Grid>

                {/*Buttons */}
                <Grid
                  item
                  sx={
                    sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                      .itemButtons
                  }
                >
                  <Button
                    variant="outlined"
                    className={profileScss["profilesButton"]}
                    onClick={editMode}
                  >
                    {isEditMode ? "Save Profile" : "Edit Profile"}
                  </Button>
                  <Button
                    variant="outlined"
                    className={profileScss["profilesButton"]}
                  >
                    Change
                    <IconButton size="small">
                      <CameraAltIcon />
                    </IconButton>
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/*Box con los grid de personal information */}
            <Box
              sx={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .personalInformation
              }
            >
              <Typography
                variant="h6"
                className={profileScss["titlePersonalInformation"]}
              >
                Personal information
              </Typography>
              <Grid container>
                {/*Personal information 1 */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    {/*First Name item */}
                    <ListItem>
                      <ListItemText primary="First Name:" />
                      {isEditMode ? (
                        <TextField
                          id="firstname"
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstname &&
                            !!formik.errors.firstname
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText
                          primary={formik.values.firstname}
                          sx={{
                            paddingRight: "9rem",
                          }}
                        />
                      )}
                    </ListItem>

                    {/*Middlename item */}
                    <ListItem>
                      <ListItemText primary="Middle Name:" />
                      {isEditMode ? (
                        <TextField
                          id="middlename"
                          name="middlename"
                          value={formik.values.middlename}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.middlename &&
                            !!formik.errors.middlename
                          }
                          helperText={
                            formik.touched.middlename &&
                            formik.errors.middlename
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText
                          primary={formik.values.middlename}
                          sx={{
                            paddingRight: "9rem",
                          }}
                        />
                      )}
                    </ListItem>

                    {/*lastname item */}
                    <ListItem>
                      <ListItemText primary="Last Name:" />
                      {isEditMode ? (
                        <TextField
                          id="lastname"
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastname && !!formik.errors.lastname
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText
                          primary={formik.values.lastname}
                          sx={{ paddingRight: "10rem" }}
                        />
                      )}
                    </ListItem>

                    {/*Second lastname item */}
                    <ListItem>
                      <ListItemText primary="Second Last Name:" />
                      {isEditMode ? (
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
                            formik.touched.secondlastname &&
                            formik.errors.secondlastname
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.secondlastname} />
                      )}
                    </ListItem>

                    {/*studentid item */}
                    <ListItem>
                      <ListItemText primary="Student ID:" />
                      {isEditMode ? (
                        <TextField
                          id="studentid"
                          name="studentid"
                          value={formik.values.studentid}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.studentid &&
                            !!formik.errors.studentid
                          }
                          helperText={
                            formik.touched.studentid && formik.errors.studentid
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.studentid} />
                      )}
                    </ListItem>
                  </List>
                </Grid>

                {/*Personal Information 2 */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    {/*Birthdate item */}
                    <ListItem>
                      <ListItemText primary={`Date or Birth: `} />
                      {isEditMode ? (
                        <TextField
                          id="birthdate"
                          name="birthdate"
                          value={formik.values.birthdate}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.birthdate &&
                            !!formik.errors.birthdate
                          }
                          helperText={
                            formik.touched.birthdate && formik.errors.birthdate
                          }
                          sx={customTextField}
                          type="date"
                        />
                      ) : (
                        <ListItemText primary={formik.values.birthdate} />
                      )}
                    </ListItem>

                    {/*phonenumber item */}
                    <ListItem>
                      <ListItemText primary={`Phone Number:`} />

                      {isEditMode ? (
                        <TextField
                          id="cell_phone"
                          name="cell_phone"
                          value={formik.values.cell_phone}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.cell_phone &&
                            !!formik.errors.cell_phone
                          }
                          helperText={
                            formik.touched.cell_phone &&
                            formik.errors.cell_phone
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={UserProfile.cell_phone} />
                      )}
                    </ListItem>

                    {/*Alternative phonenumber */}
                    <ListItem>
                      <ListItemText primary={`Alternative Phone Number: `} />
                      {isEditMode ? (
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
                      ) : (
                        <ListItemText
                          primary={formik.values.alternative_phone}
                        />
                      )}
                    </ListItem>

                    {/*Email */}
                    <ListItem>
                      <ListItemText primary={`Email: `} />
                      {isEditMode ? (
                        <TextField
                          id="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.touched.email && !!formik.errors.email}
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.email} />
                      )}
                    </ListItem>

                    {/*Institucional email item */}
                    <ListItem>
                      <ListItemText primary={`Institucional Email: `} />
                      {isEditMode ? (
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
                      ) : (
                        <ListItemText
                          primary={formik.values.institucional_email}
                        />
                      )}
                    </ListItem>
                  </List>
                </Grid>

                <Divider
                  orientation="horizontal"
                  sx={{
                    borderBottom: "1px solid gray",
                    width: "95%",
                    paddingTop: "1rem",
                  }}
                />

                {/*Academic Information */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    <Typography
                      variant="h6"
                      className={profileScss["titlePersonalInformation"]}
                    >
                      Academic Information
                    </Typography>

                    {/*Entrance year item */}
                    <ListItem>
                      <ListItemText primary={`Entrance Academic Year:`} />
                      {isEditMode ? (
                        <TextField
                          id="entranceYear"
                          name="entranceYear"
                          value={formik.values.entranceYear}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.entranceYear &&
                            !!formik.errors.entranceYear
                          }
                          helperText={
                            formik.touched.entranceYear &&
                            formik.errors.entranceYear
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.entranceYear} />
                      )}
                    </ListItem>
                    {/*Campus item */}
                    <ListItem>
                      <ListItemText primary={`Campus Main:`} />
                      {isEditMode ? (
                        <TextField
                          id="campusMain"
                          name="campusMain"
                          value={formik.values.campusMain}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.campusMain &&
                            !!formik.errors.campusMain
                          }
                          helperText={
                            formik.touched.campusMain &&
                            formik.errors.campusMain
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.campusMain} />
                      )}
                    </ListItem>

                    {/*Program item */}
                    <ListItem>
                      <ListItemText primary={`Campus Main:`} />
                      {isEditMode ? (
                        <TextField
                          id="program"
                          name="program"
                          value={formik.values.program}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.program && !!formik.errors.program
                          }
                          helperText={
                            formik.touched.program && formik.errors.program
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.program} />
                      )}
                    </ListItem>
                    {/*Entrance terms item */}
                    <ListItem>
                      <ListItemText primary={`Entrance Term:`} />
                      {isEditMode ? (
                        <TextField
                          id="entranceTerm"
                          name="entranceTerm"
                          value={formik.values.entranceTerm}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.entranceTerm &&
                            !!formik.errors.entranceTerm
                          }
                          helperText={
                            formik.touched.entranceTerm &&
                            formik.errors.entranceTerm
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.entranceTerm} />
                      )}
                    </ListItem>
                  </List>
                </Grid>

                {/*Adress */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    <Typography
                      variant="h6"
                      className={profileScss["titlePersonalInformation"]}
                    >
                      Adress
                    </Typography>

                    {/* Line 1 item */}
                    <ListItem>
                      <ListItemText primary={`Line 1:`} />
                      {isEditMode ? (
                        <TextField
                          id="line1"
                          name="line1"
                          value={formik.values.line1}
                          onChange={formik.handleChange}
                          error={formik.touched.line1 && !!formik.errors.line1}
                          helperText={
                            formik.touched.line1 && formik.errors.line1
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.line1} />
                      )}
                    </ListItem>

                    {/* Line 2 item */}
                    <ListItem>
                      <ListItemText primary={`Line 2:`} />
                      {isEditMode ? (
                        <TextField
                          id="line2"
                          name="line2"
                          value={formik.values.line2}
                          onChange={formik.handleChange}
                          error={formik.touched.line2 && !!formik.errors.line2}
                          helperText={
                            formik.touched.line2 && formik.errors.line2
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.line2} />
                      )}
                    </ListItem>

                    {/* City item */}
                    <ListItem>
                      <ListItemText primary={`City:`} />
                      {isEditMode ? (
                        <TextField
                          id="city"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          error={formik.touched.city && !!formik.errors.city}
                          helperText={formik.touched.city && formik.errors.city}
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.city} />
                      )}
                    </ListItem>

                    {/* State item */}
                    <ListItem>
                      <ListItemText primary={`State:`} />
                      {isEditMode ? (
                        <TextField
                          id="state"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          error={formik.touched.state && !!formik.errors.state}
                          helperText={
                            formik.touched.state && formik.errors.state
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.state} />
                      )}
                    </ListItem>

                    {/* Zip Code item */}
                    <ListItem>
                      <ListItemText primary={`Zip Code:`} />
                      {isEditMode ? (
                        <TextField
                          id="zipcode"
                          name="zipcode"
                          value={formik.values.zipcode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.zipcode && !!formik.errors.zipcode
                          }
                          helperText={
                            formik.touched.zipcode && formik.errors.zipcode
                          }
                          sx={customTextField}
                        />
                      ) : (
                        <ListItemText primary={formik.values.zipcode} />
                      )}
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Profile;
