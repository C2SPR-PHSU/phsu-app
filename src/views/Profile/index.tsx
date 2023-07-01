import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import styles from "./Profile.module.scss";
import { Height } from "@mui/icons-material";

const sxStyles = {
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "45%",
    display: "flex",
    alignItems: "center",
  },
  imgStyle: {
    mr: 2,
    width: "11rem",
    height: "11rem",
    borderRadius: "50%",
  },

  gridContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    backgroundColor: "yellow",
    height: "76vh",
    alignItems: "center",
  },

  btContain: {
    display: "flex",
    flexDirection: "column",
  },
};

const Profile = () => {
  return (
    <Box className={styles.wrapper}>
      {/*Image and buttons contain */}

      <Container sx={{ display: "flex" }}>
        <Grid container sx={sxStyles.gridContainer}>
          {/*Image */}
          <Grid item xs={12} sm={6} md={6} textAlign="center">
            <Typography variant="h5">Profile</Typography>

            <img
              src="https://randomuser.me/api/portraits/men/16.jpg"
              alt="uwu"
              style={sxStyles.imgStyle}
            />

            {/*Butons */}
            <Grid item xs={12} sm={6} md={12}>
              <Box>
                <Button variant="outlined" className={styles.cancelButton}>
                  Edit Profile
                </Button>
                <Button variant="outlined" className={styles.cancelButton}>
                  Change
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/*Information Conrains */}

        <Container
          sx={{
            display: "flex",
            width: "100%",
            height: "80%",
            //  backgroundColor: "green",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              //backgroundColor: "red",
              height: "60%",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={6} md={6} sx={{ py: 0 }}>
              <List>
                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`First Name: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Middle Name: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Last Name: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Second Last Name: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Student ID: `} />
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <List>
                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Date or Birth: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Phone Number: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Alternative Phone Number: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Email: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Institucional Email: `} />
                </ListItem>
              </List>
            </Grid>

            <Divider sx={{ backgroundColor: "blue" }} />

            <Grid item>
              <List>
                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Entrance Academic Year: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Campus Main: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Entarnce Term: `} />
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <List>
                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Entrance Academic Year: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Campus Main: `} />
                </ListItem>

                <ListItem sx={{ py: 0.7 }}>
                  <ListItemText primary={`Entarnce Term: `} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Profile;
