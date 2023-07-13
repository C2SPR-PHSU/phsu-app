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
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import profileScss from "./Profile.module.scss";
import sxStyles from "./ItemSx";
import { Sidebar } from "@/layout";
import { UserProfile } from "./users";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/*Mostramos sidebar */}
      <Box sx={{ display: "flex" }}>
        <Box sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).sidebarBox}>
          <Sidebar />
        </Box>

        {/*Items, Photo and Buttons content (Box main)  */}
        <Box sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxMain}>
          {/*Box de foto y botones */}
          <Box
            sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxButtoPhoto}
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
              <Grid item sx={sxStyles(isVeryScreenSmall, null, null).itemPhoto}>
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
                  sxStyles(isVeryScreenSmall, isMedium, isScreenLg).itemButtons
                }
              >
                <Button
                  variant="outlined"
                  className={profileScss["profilesButton"]}
                >
                  Edit profile
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
              {/*Personal information */}

              <Grid item xs={12} sm={6} md={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`First Name: ${UserProfile.first_name} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Middle Name: ${UserProfile.middle_name} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Last Name: ${UserProfile.last_name} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Second Last Name: ${UserProfile.second_last_name} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Student ID: ${UserProfile.student_id} `}
                    />
                  </ListItem>
                </List>
              </Grid>

              {/*Personal Information 2 */}
              <Grid item xs={12} sm={6} md={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={`Date or Birth: ${UserProfile.birthdate} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Phone Number: ${UserProfile.cell_phone} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Alternative Phone Number: ${UserProfile.alternative_phone} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary={`Email: ${UserProfile.email} `} />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Institucional Email: ${UserProfile.institucional_email} `}
                    />
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

                  <ListItem>
                    <ListItemText
                      primary={`Entrance Academic Year: ${UserProfile.entrance_year} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary={`campus: ${UserProfile.campus} `} />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary={`Program: `} />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Institucional Entrance Terms: ${UserProfile.entrance_terms} `}
                    />
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

                  <ListItem>
                    <ListItemText
                      primary={`Line q: ${UserProfile.address_line1} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Line 2: ${UserProfile.address_line2} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`City: ${UserProfile.address_city} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`state: ${UserProfile.address_city} `}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary={`Zip code: ${UserProfile.address_zipcode} `}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
