import {
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import profileScss from "./Profile.module.scss";
import sxStyles from "./ItemSx";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useFormik } from "formik";
import customTextField from "./sxTexField";
import { useState, useEffect } from "react";
import { validationSchema } from "./validateconstants";
import { UserDetails } from "./users";
import { UserProfile } from "./users";
import useAuthStore from "@/hooks/useAuthStore";
import { UserModify } from "./users";
import useAlert from "@/hooks/useAlert";

const Profile = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));
  const [isEditMode, setIsEditMode] = useState(false);
  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await UserDetails(token);
        setUserProfile(profile);
        console.log(profile);
        console.log(userProfile);
        // Actualizar las initialValues de formik con los datos obtenidos
        formik.setValues({
          email: profile?.email || "",
          cell_phone: profile?.cell_phone || "",
          studentid: profile?.student_id || "",
          firstname: profile?.first_name || "",
          middlename: profile?.middle_name || "",
          lastname: profile?.last_name || "",
          secondlastname: profile?.second_last_name || "",
          birthdate: profile?.birthdate || "",
          line1: profile?.address_line1 || "",
          line2: profile?.address_line2 || "",
          state: profile?.address_state || "",
          city: profile?.address_city || "",
          zipcode: profile?.address_zipcode || "",
          alternative_phone: profile?.alternative_phone || "",
          institucional_email: profile?.institucional_email || "",
          entranceYear: profile?.entrance_year || "",
          campusMain: profile?.campus || "",
          entranceTerm: profile?.entrance_terms || "",
          program: profile?.program || "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const formik = useFormik({
    initialValues: {
      email: userProfile?.email || "",
      cell_phone: userProfile?.cell_phone || "",
      studentid: userProfile?.student_id || "",
      firstname: userProfile.first_name,
      middlename: userProfile?.middle_name || "",
      lastname: userProfile?.last_name || "",
      secondlastname: userProfile?.second_last_name || "",
      birthdate: userProfile?.birthdate || "",
      line1: userProfile?.address_line1 || "",
      line2: userProfile?.address_line2 || "",
      state: userProfile?.address_state || "",
      city: userProfile?.address_city || "",
      zipcode: userProfile?.address_zipcode || "",
      alternative_phone: userProfile?.alternative_phone || "",
      institucional_email: userProfile?.institucional_email || "",
      entranceYear: userProfile?.entrance_year || "",
      campusMain: userProfile?.campus || "",
      entranceTerm: userProfile?.entrance_terms || "",
      program: userProfile?.program || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (formik.isValid) {
        console.log(values);
        setIsEditMode(!isEditMode);
        const response = await UserModify(token, values);
        response.action;

        if (response.action === "update") {
          setAlert("Update successfully!", "success");
        }
      } else {
        setAlert("Something happened. Try again later", "error");
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex" }}>
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
                  variant="h3"
                  className={profileScss["title"]}
                  sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).title}
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
                    className={profileScss["img-profile-style"]}
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
                    className={profileScss["profiles-button"]}
                    type="submit"
                  >
                    {isEditMode ? "Save Profile" : "Edit Profile"}
                  </Button>

                  <Button
                    variant="outlined"
                    className={profileScss["profiles-button"]}
                  >
                    Change
                    <CameraAltIcon />
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
                className={profileScss["title-personal-information"]}
              >
                Personal information
              </Typography>
              <Grid container sx={{ paddingBottom: "10%" }}>
                {/*Personal information 1 */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    {/*First Name item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <h3 style={sxStyles(null, null, null).listItemNameLg}>
                        First Name:
                      </h3>

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
                          sx={
                            sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                              .listItemTextstyle
                          }
                        />
                      )}
                    </ListItem>

                    {/*Middlename item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Middle Name:
                      </div>
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
                        <div>{formik.values.middlename}</div>
                      )}
                    </ListItem>

                    {/*lastname item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Last Name:
                      </div>
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
                        <div>{formik.values.lastname}</div>
                      )}
                    </ListItem>

                    {/*Second lastname item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Second lastname:
                      </div>
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
                        <div>{formik.values.secondlastname}</div>
                      )}
                    </ListItem>

                    {/*studentid item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Student ID:
                      </div>
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
                        <div>{formik.values.studentid}</div>
                      )}
                    </ListItem>
                  </List>
                </Grid>

                {/*Personal Information 2 */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    {/*Birthdate item */}
                    <ListItem>
                      <div
                        style={
                          sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                            .listItemNameLg
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
                            error={
                              formik.touched.birthdate &&
                              !!formik.errors.birthdate
                            }
                            helperText={
                              formik.touched.birthdate &&
                              formik.errors.birthdate
                            }
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
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
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
                        </div>
                      ) : (
                        <div>{formik.values.cell_phone}</div>
                      )}
                    </ListItem>

                    {/*Alternative phonenumber */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
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
                          sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                            .listItemNameLg
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
                            error={
                              formik.touched.email && !!formik.errors.email
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                            sx={customTextField}
                          />
                        </div>
                      ) : (
                        <div>{formik.values.email}</div>
                      )}
                    </ListItem>

                    {/*Institucional email item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div
                        style={
                          sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                            .listItemNameLg
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
                      className={profileScss["title-academic-information"]}
                    >
                      Academic Information
                    </Typography>

                    {/*Entrance year item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <h3 style={sxStyles(null, null, null).listItemNameLg}>
                        Entrance Year:{" "}
                      </h3>
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
                            flex: 1,
                            paddingRight: "4rem",
                          }}
                        />
                      )}
                    </ListItem>
                    {/*Campus item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <h3 style={sxStyles(null, null, null).listItemNameLg}>
                        Campus
                      </h3>
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
                        <ListItemText
                          primary={formik.values.campusMain}
                          sx={
                            sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                              .listItemTextstyle
                          }
                        />
                      )}
                    </ListItem>

                    {/*Entrance terms item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <h3 style={sxStyles(null, null, null).listItemNameLg}>
                        Entrance Terms
                      </h3>
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
                            flex: 1,
                          }}
                        />
                      )}
                    </ListItem>
                  </List>
                </Grid>

                {/*Adress */}
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    <Typography
                      variant="h6"
                      className={profileScss["title-academic-information"]}
                    >
                      Address
                    </Typography>

                    {/* Line 1 item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Line 1:
                      </div>
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
                            error={
                              formik.touched.line1 && !!formik.errors.line1
                            }
                            helperText={
                              formik.touched.line1 && formik.errors.line1
                            }
                            sx={customTextField}
                          />
                        </div>
                      ) : (
                        <div>{formik.values.line1}</div>
                      )}
                    </ListItem>

                    {/* Line 2 item */}
                    <ListItem
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
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
                            error={
                              formik.touched.line2 && !!formik.errors.line2
                            }
                            helperText={
                              formik.touched.line2 && formik.errors.line2
                            }
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
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        City:{" "}
                      </div>
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
                            helperText={
                              formik.touched.city && formik.errors.city
                            }
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
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        State:
                      </div>
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
                            error={
                              formik.touched.state && !!formik.errors.state
                            }
                            helperText={
                              formik.touched.state && formik.errors.state
                            }
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
                      sx={
                        sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                          .listItem
                      }
                    >
                      <div style={sxStyles(null, null, null).listItemNameLg}>
                        Zip code:
                      </div>
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
                            error={
                              formik.touched.zipcode && !!formik.errors.zipcode
                            }
                            helperText={
                              formik.touched.zipcode && formik.errors.zipcode
                            }
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
              </Grid>
            </Box>
          </Box>
        </Box>
        s
      </form>
    </>
  );
};

export default Profile;
