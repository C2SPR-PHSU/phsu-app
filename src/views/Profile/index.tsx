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

import profileScss from "./Profile.module.scss";
import { Sidebar } from "@/layout";
import { UserProfile } from "./object";

const sxStyles = {
  wrapper: {
    display: "flex",
    // backgroundColor: "green",
    padding: 0,
    margin: 0,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    // backgroundColor: "pink",
    height: "105vh",
    width: "180vh",
  },
  photoGridItem: {
    justifyContent: "end",
    display: "flex",
  },
  photoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: "0.5rem",
  },
  infoGridItem: {
    //
    flexDirection: "column",
    display: "flex",
    padding: "3rem 1rem 0rem",
  },
  personalInfoTitle: {
    variant: "h5",
  },
  personalInfoBox: {
    display: "flex",
    height: "40%",
    //backgroundColor: "gray",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",

    paddingBottom: "3rem",
  },
  listItem: {
    py: 1,
    flexGrow: 1,
  },
  list: {
    padding: "1rem 0rem 2rem",
    // backgroundColor: "green",
  },
  listItemText: {
    fontSize: "10px",
  },
  academicInfoGridItem: {
    padding: " 0.6rem",
  },
  addressGridItem: {
    height: "70%",
    padding: "1rem 1rem 2rem",
  },
};

const Profile = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/*Sidebar section */}
        <Box sx={{ width: "11%" }}>
          <Sidebar />
        </Box>

        {/*Profile section */}
        <Box sx={sxStyles.wrapper}>
          <Grid container sx={sxStyles.gridContainer}>
            {/*Image and Buttons */}
            <Grid item xs={12} sm={4} md={4} sx={sxStyles.photoGridItem}>
              <Box sx={sxStyles.photoBox}>
                <Typography variant="h4" className={profileScss["title"]}>
                  Profile
                </Typography>

                <img
                  src="https://randomuser.me/api/portraits/men/83.jpg"
                  alt="uwu"
                  className={profileScss["imgProfileStyle"]}
                />

                {/*Button section */}
                <Box className={profileScss["buttons-profile"]}>
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
              </Box>
            </Grid>

            {/*Personal Information */}
            <Grid item xs={12} sm={8} md={8} sx={sxStyles.infoGridItem}>
              {/*Personal Information */}
              <Typography
                variant="h5"
                className={profileScss["titlePersonalInformation"]}
              >
                Personal Information
              </Typography>
              <Box sx={sxStyles.personalInfoBox}>
                <Grid item xs={12} sm={6} md={6}>
                  <List sx={sxStyles.listContainer}>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        sx={sxStyles.listItemText}
                        primary={`First Name: ${UserProfile.first_name}`}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Middle Name: ${UserProfile.middle_name}`}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Last Name: ${UserProfile.last_name}`}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Second Last Name: ${UserProfile.second_last_name}`}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Student ID: ${UserProfile.student_id}`}
                      />
                    </ListItem>
                  </List>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <List sx={sxStyles.listContainer}>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Date or Birth: ${UserProfile.birthdate} `}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Phone Number: ${UserProfile.cell_phone} `}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Alternative Phone Number: ${UserProfile.alternative_phone} `}
                      />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText primary={`Email: ${UserProfile.email}`} />
                    </ListItem>
                    <ListItem sx={sxStyles.listItem}>
                      <ListItemText
                        primary={`Institucional Email: ${UserProfile.institucional_email}`}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Box>

              <Divider
                sx={{
                  borderWidth: "1.4px",
                  marginBottom: "1rem",
                  width: "100%",
                  marginLeft: "3rem",
                }}
              />

              {/*Academic and Address information */}
              <Box sx={sxStyles.personalInfoBox}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="h5"
                    className={profileScss["titlePersonalInformation"]}
                  >
                    Academic Information
                  </Typography>

                  <List sx={sxStyles.academicInfoGridItem}>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        sx={{ fontSize: "10px" }}
                        primary={`Entrance Academic Year: ${UserProfile.entrance_year} `}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`Campus: ${UserProfile.campus} `}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`Entrance Term: ${UserProfile.entrance_terms}`}
                      />
                    </ListItem>
                  </List>
                </Grid>

                {/*Address Section */}
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="h5"
                    className={profileScss["titlePersonalInformation"]}
                  >
                    Address
                  </Typography>

                  <List sx={sxStyles.addressGridItem}>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`Adress Line 1: ${UserProfile.address_line1} `}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`Adress Line 2: ${UserProfile.address_line2}`}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`City: ${UserProfile.address_city} `}
                      />
                    </ListItem>

                    <ListItem sx={{ py: 1 }}>
                      <ListItemText
                        primary={`Zip Code: ${UserProfile.address_zipcode} `}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
