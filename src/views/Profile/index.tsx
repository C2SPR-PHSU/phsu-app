import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  ListItem,
  List,
  ListItemText,
  Divider,
} from "@mui/material";

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "green",
          padding: 0,
          margin: 0,
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "pink",
            height: "85vh",
            width: "180vh",
          }}
        >
          {/*Photo */}
          <Grid
            item
            sx={{
              backgroundColor: "yellow",
              justifyContent: "center",
              display: "flex",
            }}
            xs={12}
            sm={4}
            md={4}
          >
            {/*Image and Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography>Profile</Typography>
              <img
                src="https://randomuser.me/api/portraits/men/83.jpg"
                alt="uwu"
              />

              {/*Button section */}

              <Button>Edit Profile</Button>
              <Button>Change</Button>
            </Box>
          </Grid>

          {/*Personal Information */}
          <Grid
            item
            sx={{
              backgroundColor: "gray",
              flexDirection: "column",
              display: "flex",
            }}
            xs={12}
            sm={8}
            md={8}
          >
            {/*Personal Information */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item sm={6} md={6} xs={12} sx={{ backgroundColor: "blue" }}>
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

              <Grid
                item
                sm={6}
                md={6}
                xs={12}
                sx={{ backgroundColor: "white" }}
              >
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
            </Box>

            <Divider />

            {/*Academic and Adress information */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item sm={6} md={6} xs={12} sx={{ backgroundColor: "blue" }}>
                <List>
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

              <Grid
                item
                sm={6}
                md={6}
                xs={12}
                sx={{ backgroundColor: "white" }}
              >
                <List>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
