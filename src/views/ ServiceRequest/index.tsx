import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CustomLabel from "@/components/CustomLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./stylesServices.module.scss";
import { Sidebar } from "@/layout";
import List from "@mui/material/List";
import Documents from "@/components/Documents-User";
import ListItem from "@mui/material/ListItem";

import { documentsUser } from "./object";
// import { AcademicInformation } from "./object";
// import Footer from "@/layout";

const ServiceRequest = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  // state menu toggle academic information
  const [academic, setAcademic] = useState(false);

  // state menu toggle personal information
  const [personal, setPersonal] = useState(false);

  // this state is used to determine whether the user has uploaded at least one document
  const [documents, setDocuments] = useState(true);

  // open menu1 toggle
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // close menu1 toggle
  const handleClose = () => {
    setAnchorEl(null);
  };

  // open menu2 toggle
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  // close menu2 toggle
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // open and close menu  (academic information)
  const academicMenuToggle = (event: any) => {
    const textFieldClicked = event.target.tagName === "INPUT";

    if (!textFieldClicked) {
      setAcademic((prevMenuOpen) => !prevMenuOpen);
    }
  };

  // open and close menu  (personal information)
  const personalMenuToggle = (event: any) => {
    const textFieldClicked = event.target.tagName === "INPUT";

    if (!textFieldClicked) {
      setPersonal((prevMenuOpen) => !prevMenuOpen);
    }
  };

  const primaryColor = "#70928E";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const customTextField = {
    width: "90%",
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
    },
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ minWidth: "7rem" }}>
          <Sidebar />
        </Box>

        <Box
          sx={{
            // backgroundColor: "red",
            paddingLeft: "5rem",
            paddingTop: "2rem",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
            >
              <Typography className={styles["title-services"]}>
                Services Request
              </Typography>
              <Typography className={styles["description-view-services"]}>
                Upload all the credentialing documents as requested in the
                credentialing notification sent to your institutional email.
                Documents will be reviewed by the Health Services Coordinator
                and status of processing will be available in your dashboard.
                Remember all documents must be submited in PDF format.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={5} sx={{ paddingTop: "2rem" }}>
              <Typography className={styles["campus-selection-title"]}>
                Campus selection
              </Typography>
              <CustomLabel name="Campus" required={true} />
              <Button
                variant="outlined"
                onClick={handleClick}
                className={styles["toggle-button"]}
              >
                Select your campus
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <List
                  sx={{
                    minWidth: "20rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ListItem
                    onClick={handleClose}
                    sx={{ borderBottom: "1px solid #C6C6C6" }}
                  >
                    Main
                  </ListItem>
                  <ListItem
                    onClick={handleClose}
                    sx={{ borderBottom: "1px solid #C6C6C6" }}
                  >
                    San Juan
                  </ListItem>
                  <ListItem
                    onClick={handleClose}
                    sx={{ borderBottom: "1px solid #C6C6C6" }}
                  >
                    St. Lois
                  </ListItem>
                  <ListItem
                    onClick={handleClose}
                    sx={{ borderBottom: "1px solid #C6C6C6" }}
                  >
                    Online
                  </ListItem>
                </List>
              </Menu>
            </Grid>
            <Grid item xs={12} md={6} lg={5} sx={{ paddingTop: "3.9rem" }}>
              <CustomLabel name="Service" required={true} />
              <Button
                variant="outlined"
                onClick={handleClick2}
                className={styles["toggle-button"]}
              >
                Select your Services
              </Button>
              <Menu
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2}>Credential Process</MenuItem>
                <MenuItem onClick={handleClose2}>Re-credentialing</MenuItem>
                <MenuItem onClick={handleClose2}>
                  Admissions Document Upload
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  Finacial Aid Documents Upload
                </MenuItem>
                <MenuItem onClick={handleClose2}>Transcript Request</MenuItem>
              </Menu>
            </Grid>

            {/* --------------------------Section for uploaded documents ---------------------------------- */}
            <Grid
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingTop: "2.2rem", paddingBottom: "2rem" }}
            >
              {/* ------------------ This section will be visible as long as no document has been uploaded ----------------------- */}
              <Typography
                className={styles["campus-selection-title"]}
                sx={{
                  ...(documents && {
                    display: "none",
                  }),
                }}
              >
                Documents
              </Typography>

              <Box
                sx={{
                  display: "none",
                  ...(documents && {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    paddingBottom: "1rem",
                  }),
                }}
              >
                <Typography className={styles["selection-title-documents"]}>
                  Documents
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "3rem" }}
                >
                  <Typography className={styles["selection-title-documents"]}>
                    Actions
                  </Typography>
                  <Typography className={styles["selection-title-documents"]}>
                    Uploaded
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "gray",
                  ...(documents && {
                    display: "none",
                  }),
                }}
              >
                You have not selected your campus
              </Typography>

              <Box
                sx={{
                  display: "none",
                  ...(documents && {
                    display: "flex",
                    flexDirection: "column",
                  }),
                }}
              >
                {documentsUser.map((service) => {
                  return (
                    <Documents
                      text={service.title}
                      important={service.important}
                      upload={service.upload}
                      trash={service.trash}
                      visibility={service.visibility}
                    />
                  );
                })}
              </Box>
            </Grid>

            {/* --------------------------Menu toggle Academic information ---------------------------------- */}
            <Grid xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <Box
                sx={{
                  backgroundColor: "#efefef",
                  width: "85%",
                  borderRadius: "10px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  ...(academic && {
                    height: "100%",
                    paddingBottom: "3%",
                  }),
                }}
                onClick={academicMenuToggle}
              >
                <Box>
                  <Typography className={styles["box-academic-i"]}>
                    Academic Information
                  </Typography>
                </Box>

                <Grid
                  container
                  sx={{
                    display: "none",
                    ...(academic && {
                      display: "flex",
                    }),
                  }}
                >
                  {/* item 1 */}
                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel
                      name="Entrance Academic Year"
                      required={false}
                    />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Campus" required={false} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Program" required={false} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Entrance Term" required={false} />
                    <TextField sx={customTextField} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* --------------------------Menu toggle Personal Information ----------------------------------- */}
            <Grid xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <Box
                sx={{
                  backgroundColor: "#efefef",
                  width: "85%",
                  borderRadius: "5px",
                  padding: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={personalMenuToggle}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography className={styles["box-academic-i"]}>
                    Personal Information
                  </Typography>
                </Box>

                <Grid
                  container
                  sx={{
                    display: "none",
                    ...(personal && {
                      display: "flex",
                    }),
                  }}
                >
                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Fisrt Name" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Middle Name" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Last Name" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Second Last Name" required={false} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Date of Birth" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Cell Phone" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Email" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>

                  <Grid item xs={12} md={4} lg={4}>
                    <CustomLabel name="Estudent ID" required={true} />
                    <TextField sx={customTextField} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* ------------------------------- Section Save and submit -------------------------------------- */}
            <Grid
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
            >
              <Grid
                container
                sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <Button variant="contained" className={styles["button-submit"]}>
                  SUBMIT
                </Button>
                <Button variant="contained" className={styles["button-save"]}>
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ServiceRequest;
