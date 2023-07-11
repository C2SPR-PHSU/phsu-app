import {
  Grid,
  Box,
  Typography,
  Button,
  ListItem,
  List,
  ListItemText,
  IconButton,
  TextField,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import profileScss from "./Profile.module.scss";
import { Sidebar } from "@/layout";
import { UserProfile } from "./object";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

//Styles forms
const primaryColor = "#009999";
const placeholderColor = "rgba(51, 51, 51, 0.4)";

const customTextField = {
  width: "130px",

  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
    borderRadius: 0,
    border: "2px solid " + primaryColor,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
  },
  "& .MuiInputLabel-outlined": {
    fontSize: "1rem",
    color: placeholderColor,
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: primaryColor,
  },
  "& .MuiOutlinedInput-input": {
    padding: "0.7rem",
    height: "0.5rem",
  },
};

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    middlename: Yup.string().required("Middle Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    secondlastname: Yup.string().required("Second Last Name is required"),
    studentid: Yup.string().required("Student ID is required"),
    birthdate: Yup.string().required("Date of Birth is required"),
    cell_phone: Yup.string().required("Phone Number is required"),
    alternative_phone: Yup.string().required(
      "Alternative Phone Number is required"
    ),
    email: Yup.string().required("Email is required"),
    institucional_email: Yup.string().required(
      "Institucional Email is required"
    ),
  });
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
    },
    //validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsEditMode(false);
      handleEditProfile();
    },
  });

  const handleEditProfile = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ...(isScreenSmall && {
              display: "flex",
              flexDirection: "column",
            }),
          }}
        >
          {/*Sidebar section */}
          <Box sx={{ width: "20%" }}></Box>
          {/*Buttons and picture sections */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "7rem",
              paddingRight: "2rem",
              paddingTop: "2rem",
              height: "20%",
              ...(isScreenSmall && { paddingLeft: "0rem" }),
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10%",
                ...(isScreenSmall && {
                  paddingLeft: "30%",
                  paddingBottom: "1rem",
                }),
              }}
            >
              <Typography className={profileScss["title"]}>Profile</Typography>

              <Box className={profileScss["buttons-profile"]}>
                <img
                  src="https://randomuser.me/api/portraits/men/83.jpg"
                  alt="profile-picture"
                  className={profileScss["imgProfileStyle"]}
                />
                <Button
                  variant="outlined"
                  className={profileScss["profilesButton"]}
                  type="submit"
                  // onClick={handleEditProfile}
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
              </Box>
            </Grid>
          </Box>

          {/*Sections information or edit */}

          <Grid
            container
            sx={{
              paddingTop: "5rem",
              ...(isScreenSmall && {
                paddingLeft: "5%",
                paddingRight: "5%",
              }),
              alignItems: "flex-start",
            }}
          >
            {/* PERSONAL INFORMATIONS  (1) */}
            <Grid item xs={12} md={6} lg={6}>
              <Typography className={profileScss["titlePersonalInformation"]}>
                Personal Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  ...(isScreenSmall && {
                    flexDirection: "column-reverse",
                  }),
                }}
              >
                <List
                  sx={{
                    paddingLeft: "0.5rem",
                    ...(isScreenSmall && {
                      paddingLeft: "3rem",
                    }),

                    ...(isEditMode && {
                      paddingRight: "30%",
                    }),
                  }}
                >
                  {/*Firstaname item */}
                  <ListItem
                    sx={{
                      ...(isScreenSmall && {
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "6rem",
                      }),
                    }}
                  >
                    <ListItemText
                      primary="First Name:"
                      sx={{
                        ...(isScreenSmall && {
                          paddingRight: "7.4rem",
                        }),
                        ...(isScreenSmall &&
                          isEditMode && {
                            paddingRight: "2.7rem",
                          }),
                      }}
                    />
                    {isEditMode ? (
                      <TextField
                        id="firstname"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstname && !!formik.errors.firstname
                        }
                        helperText={
                          formik.touched.firstname && formik.errors.firstname
                        }
                        sx={customTextField}
                      />
                    ) : (
                      <ListItemText
                        primary={formik.values.firstname}
                        sx={{ paddingRight: "10rem" }}
                      />
                    )}
                  </ListItem>

                  {/*Middlename item */}
                  <ListItem
                    sx={{
                      ...(isScreenSmall && {
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "6rem",
                      }),
                    }}
                  >
                    <ListItemText
                      primary="Middle Name:"
                      sx={{
                        ...(isScreenSmall && {
                          paddingRight: "6.6rem",
                        }),
                        ...(isScreenSmall &&
                          isEditMode && {
                            paddingRight: "1.7rem",
                          }),
                      }}
                    />
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
                          formik.touched.middlename && formik.errors.middlename
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
                  <ListItem
                    sx={{
                      ...(isScreenSmall && {
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "6rem",
                      }),
                    }}
                  >
                    <ListItemText
                      primary="Last Name:"
                      sx={{
                        ...(isScreenSmall && {
                          paddingRight: "7.6rem",
                        }),
                        ...(isScreenSmall &&
                          isEditMode && {
                            paddingRight: "1.7rem",
                          }),
                      }}
                    />
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
                  <ListItem
                    sx={{
                      ...(isScreenSmall && {
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "6rem",
                      }),
                    }}
                  >
                    <ListItemText
                      primary="Second Last Name:"
                      sx={{
                        ...(isScreenSmall && {
                          paddingRight: "4rem",
                        }),
                        ...(isScreenSmall &&
                          isEditMode && {
                            paddingRight: "0rem",
                          }),
                      }}
                    />
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
                      <ListItemText
                        primary={formik.values.secondlastname}
                        sx={{
                          paddingRight: isScreenSmall ? "9rem" : "13rem",
                        }}
                      />
                    )}
                  </ListItem>

                  {/*studentid item */}
                  <ListItem
                    sx={{
                      ...(isScreenSmall && {
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "6rem",
                      }),
                    }}
                  >
                    <ListItemText
                      primary="Student ID:"
                      sx={{
                        ...(isScreenSmall && {
                          paddingRight: "7.7rem",
                        }),
                        ...(isScreenSmall &&
                          isEditMode && {
                            paddingRight: "3rem",
                          }),
                      }}
                    />
                    {isEditMode ? (
                      <TextField
                        id="studentid"
                        name="studentid"
                        value={formik.values.studentid}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.studentid && !!formik.errors.studentid
                        }
                        helperText={
                          formik.touched.studentid && formik.errors.studentid
                        }
                        sx={customTextField}
                      />
                    ) : (
                      <ListItemText
                        primary={formik.values.studentid}
                        sx={{
                          paddingRight: isScreenSmall ? "7.7rem" : "13rem",
                        }}
                      />
                    )}
                  </ListItem>
                </List>
              </Box>
            </Grid>

            {/*Second section  (2) */}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                paddingTop: "4rem",

                paddingBottom: "1rem",
                ...(isScreenSmall && {
                  paddingLeft: "1rem",
                }),
              }}
            >
              <List
                sx={{
                  paddingLeft: "0.5rem",

                  ...(isScreenSmall && {
                    paddingLeft: "0rem",
                  }),
                }}
              >
                {/*Birthdate item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText
                    primary={`Date or Birth: `}
                    sx={{
                      ...(isScreenSmall && {
                        paddingRight: "7rem",
                      }),
                      ...(isScreenSmall &&
                        isEditMode && {
                          paddingRight: "7rem",
                        }),
                    }}
                  />
                  {isEditMode ? (
                    <TextField
                      id="birthdate"
                      name="birthdate"
                      value={formik.values.birthdate}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.birthdate && !!formik.errors.birthdate
                      }
                      helperText={
                        formik.touched.birthdate && formik.errors.birthdate
                      }
                      sx={customTextField}
                      type="date"
                    />
                  ) : (
                    <ListItemText
                      primary={formik.values.birthdate}
                      sx={{
                        paddingRight: isScreenSmall ? "7.7rem" : "13rem",
                      }}
                    />
                  )}
                </ListItem>
                {/*phonenumber item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText
                    primary={`Phone Number:`}
                    sx={{
                      width: "55%",
                      ...(isScreenSmall && {
                        width: "100%",
                      }),
                      ...(isScreenSmall &&
                        isEditMode && {
                          paddingInlineEnd: "7rem",
                        }),
                    }}
                  />

                  {isEditMode ? (
                    <TextField
                      id="cell_phone"
                      name="cell_phone"
                      value={formik.values.cell_phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cell_phone && !!formik.errors.cell_phone
                      }
                      helperText={
                        formik.touched.cell_phone && formik.errors.cell_phone
                      }
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText
                      primary={UserProfile.cell_phone}
                      sx={{
                        paddingRight: isScreenSmall ? "4rem" : "13rem",
                      }}
                    />
                  )}
                </ListItem>
                {/*Alternative phonenumber */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText
                    primary={`Alternative Phone Number: `}
                    sx={{
                      //   width: "8%",
                      ...(isScreenSmall && {
                        paddingInlineEnd: "7rem",
                      }),
                      ...(isScreenSmall &&
                        isEditMode && {
                          paddingInlineEnd: "7rem",
                        }),
                    }}
                  />
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
                    <ListItemText primary={formik.values.alternative_phone} />
                  )}
                </ListItem>
                {/*Email */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`Email: `} />
                  {isEditMode ? (
                    <TextField
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && !!formik.errors.email}
                      helperText={formik.touched.email && formik.errors.email}
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText
                      primary={formik.values.email}
                      sx={{
                        paddingRight: isScreenSmall ? "1rem" : "9rem",
                      }}
                    />
                  )}
                </ListItem>

                {/*Institucional email item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
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
                      sx={{
                        paddingRight: isScreenSmall ? "4rem" : "4rem",
                      }}
                    />
                  )}
                </ListItem>
              </List>
            </Grid>

            {/* ACADEMIC INFORMATION (3) */}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                paddingBottom: "1rem",

                ...(isScreenSmall && {
                  paddingLeft: "1rem",
                }),
              }}
            >
              <Typography className={profileScss["titlePersonalInformation"]}>
                Academic Information
              </Typography>

              <List
                sx={{
                  paddingLeft: "0.5rem",
                  ...(isScreenSmall && {
                    paddingLeft: "0.5rem",
                  }),
                }}
              >
                {/*Entrance year item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
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
                    <ListItemText
                      primary={formik.values.entranceYear}
                      sx={{
                        paddingRight: isScreenSmall ? "4rem" : "10rem",
                      }}
                    />
                  )}
                </ListItem>

                {/*Campus item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`Campus Main:`} />
                  {isEditMode ? (
                    <TextField
                      id="campusMain"
                      name="campusMain"
                      value={formik.values.campusMain}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.campusMain && !!formik.errors.campusMain
                      }
                      helperText={
                        formik.touched.campusMain && formik.errors.campusMain
                      }
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText
                      primary={formik.values.campusMain}
                      sx={{
                        paddingRight: isScreenSmall ? "2rem" : "13rem",
                      }}
                    />
                  )}
                </ListItem>

                {/*Entrance terms item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
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
                    <ListItemText
                      primary={formik.values.entranceTerm}
                      sx={{
                        paddingRight: isScreenSmall ? "2rem" : "12rem",
                      }}
                    />
                  )}
                </ListItem>
              </List>
            </Grid>
            {/*Forth section  (4) */}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                paddingBottom: "4rem",
                ...(isScreenSmall && {
                  paddingLeft: "1rem",
                }),
              }}
            >
              <Typography className={profileScss["titlePersonalInformation"]}>
                Address
              </Typography>

              <List
                sx={{
                  paddingLeft: "0.5rem",
                  ...(isScreenSmall && {
                    paddingLeft: "0.5rem",
                  }),
                }}
              >
                {/* Line 1 item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`Line 1:`} />
                  {isEditMode ? (
                    <TextField
                      id="line1"
                      name="line1"
                      value={formik.values.line1}
                      onChange={formik.handleChange}
                      error={formik.touched.line1 && !!formik.errors.line1}
                      helperText={formik.touched.line1 && formik.errors.line1}
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText primary={formik.values.line1} />
                  )}
                </ListItem>

                {/* Line 2 item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`Line 2:`} />
                  {isEditMode ? (
                    <TextField
                      id="line2"
                      name="line2"
                      value={formik.values.line2}
                      onChange={formik.handleChange}
                      error={formik.touched.line2 && !!formik.errors.line2}
                      helperText={formik.touched.line2 && formik.errors.line2}
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText primary={formik.values.line2} />
                  )}
                </ListItem>

                {/* City item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
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
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`State:`} />
                  {isEditMode ? (
                    <TextField
                      id="state"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      error={formik.touched.state && !!formik.errors.state}
                      helperText={formik.touched.state && formik.errors.state}
                      sx={customTextField}
                    />
                  ) : (
                    <ListItemText primary={formik.values.state} />
                  )}
                </ListItem>

                {/* Zip Code item */}
                <ListItem
                  sx={{
                    ...(isScreenSmall && {
                      display: "flex",
                      flexDirection: "column",
                      paddingRight: "6rem",
                    }),
                  }}
                >
                  <ListItemText primary={`Zip Code:`} />
                  {isEditMode ? (
                    <TextField
                      id="zipcode"
                      name="zipcode"
                      value={formik.values.zipcode}
                      onChange={formik.handleChange}
                      error={formik.touched.zipcode && !!formik.errors.zipcode}
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
      </form>
    </>
  );
};

export default Profile;
