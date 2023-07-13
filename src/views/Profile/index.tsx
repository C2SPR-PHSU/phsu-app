import React from "react";
import {
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import profileScss from "./Profile.module.scss";
import sxStyles from "./ItemSx";
import { Sidebar } from "@/layout";

const Profile = () => {
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/*Mostramos sidebar */}
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "12%",
            height: "100vh",
            ...(isVeryScreenSmall && {
              display: "none",
            }),
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",

            ...(isMedium &&
              isVeryScreenSmall && {
                display: "flex",
                flexDirection: "column",
              }),
          }}
        >
          {/*Box de foto y botones */}
          <Box
            sx={{
              height: "90%",
              width: "28%",
              paddingLeft: "10%",
              paddingBottom: "10%",
              marginLeft: "20%",

              ...(isVeryScreenSmall && {
                width: "100%",
              }),
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                flexDirection: "column",
                height: "80%",
                ...(isVeryScreenSmall && {
                  width: "100%",
                  height: "100%",
                  paddingBottom: "15%",
                  alignItems: "flex-start",
                  paddingTop: "10%",
                }),
              }}
            >
              {/*Photo */}
              <Grid
                item
                sx={{
                  ...(isVeryScreenSmall && {
                    display: "flex",
                    flexDirection: "column",
                  }),
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/60.jpg"
                  alt="user-photo"
                  className={profileScss["imgProfileStyle"]}
                />

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
                  Change photo
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/*Box con los grid de personal information */}
          <Box
            sx={{
              height: "90%",
              width: "65%",
              ...(isMedium &&
                isVeryScreenSmall && {
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }),
            }}
          >
            <Typography variant="h6" className={profileScss["title"]}>
              Personal information
            </Typography>
            <Grid container>
              {/*Personal information */}

              <Grid item xs={12} sm={6} md={6} sx={sxStyles.infoGridItem}>
                <List>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`First Name: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Middle Name: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Last Name: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Second Last Name: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Student ID: `} />
                  </ListItem>
                </List>
              </Grid>

              {/*Personal Information 2 */}
              <Grid item xs={12} sm={6} md={6} sx={sxStyles.infoGridItem}>
                <List>
                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Date or Birth: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Phone Number: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Alternative Phone Number: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Email: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Institucional Email: `} />
                  </ListItem>
                </List>
              </Grid>

              {/*Academic Information */}
              <Grid item xs={12} sm={6} md={6} sx={sxStyles.infoGridItem}>
                <List>
                  <Typography
                    variant="h6"
                    className={profileScss["titlePersonalInformation"]}
                  >
                    Academic Information
                  </Typography>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Date or Birth: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Phone Number: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Alternative Phone Number: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Email: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Institucional Email: `} />
                  </ListItem>
                </List>
              </Grid>

              {/*Adress */}

              <Grid item xs={12} sm={6} md={6} sx={sxStyles.infoGridItem}>
                <List>
                  <Typography
                    variant="h6"
                    className={profileScss["titlePersonalInformation"]}
                  >
                    Adress
                  </Typography>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Entrance Academic Year: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Campus Main: `} />
                  </ListItem>

                  <ListItem sx={{ py: 0 }}>
                    <ListItemText primary={`Entarnce Term: `} />
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
