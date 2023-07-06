import {
  Grid,
  Box,
  Typography,
  Button,
  ListItem,
  List,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import profileScss from "./Profile.module.scss";
import { Sidebar } from "@/layout";
import { UserProfile } from "./object";

const Profile = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            width: "10%",
            ...(isScreenSmall && { display: "none" }),
          }}
        >
          <Sidebar />
        </Box>
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
                alt="uwu"
                className={profileScss["imgProfileStyle"]}
              />
              <Button
                variant="outlined"
                className={profileScss["profilesButton"]}
              >
                Edit Profile
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

        <Grid
          container
          sx={{
            paddingTop: "5rem",
            ...(isScreenSmall && {
              paddingLeft: "20%",
              paddingRight: "5%",
            }),
          }}
        >
          {/* PERSONAL INFORMATIONS  (1) */}
          <Grid item xs={12} md={6} lg={6} sx={{}}>
            <Typography className={profileScss["titlePersonalInformation"]}>
              Personal Information
            </Typography>
            <List
              sx={{
                paddingLeft: "1rem",
                ...(isScreenSmall && {
                  paddingLeft: "0rem",
                }),
              }}
            >
              <ListItem>
                <ListItemText
                  primary={`First Name: ${UserProfile.first_name}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Middle Name: ${UserProfile.middle_name}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Last Name: ${UserProfile.last_name}`} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Second Last Name: ${UserProfile.second_last_name}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Student ID: ${UserProfile.student_id}`}
                />
              </ListItem>
            </List>
          </Grid>

          {/*Second section  (2) */}
          <Grid item xs={12} md={6} lg={6} sx={{ paddingTop: "4rem" }}>
            <List>
              <ListItem>
                <ListItemText primary={`Date or Birth: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Phone Number: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Alternative Phone Number: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Email: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Institucional Email: `} />
              </ListItem>
            </List>
          </Grid>

          {/* ACADEMIC INFORMATION (3) */}
          <Grid item xs={12} md={6} lg={6} sx={{}}>
            <Typography className={profileScss["titlePersonalInformation"]}>
              Academic Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Entrance Academic Year: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Campus Main: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Entarnce Term: `} />
              </ListItem>
            </List>
          </Grid>

          {/*Forth section  (4) */}
          <Grid item xs={12} md={6} lg={6}>
            <Typography className={profileScss["titlePersonalInformation"]}>
              Address
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Entrance Academic Year: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Campus Main: `} />
              </ListItem>

              <ListItem>
                <ListItemText primary={`Entarnce Term: `} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
