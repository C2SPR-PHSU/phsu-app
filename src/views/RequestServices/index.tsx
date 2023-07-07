import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import CustomLabel from "@/components/CustomLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./styles.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { getCampuses } from "./functions";

const RequestServices = () => {
  const [campuses, setCampuses] = useState([]);
  const [campusSelected, setCampusSelected] = useState({});

  const getAllCampuses = async () => {
    const response = await getCampuses();
    setCampuses(response);
    setCampusSelected(response[0].id);
  };

  useEffect(() => {
    getAllCampuses();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            // backgroundColor: "red",
            paddingLeft: "5rem",
            paddingTop: "2rem",
          }}
        >
          <Grid container spacing={1}>
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

            <Grid xs={12} md={6} lg={6} sx={{ paddingTop: "2rem" }}>
              <InputLabel id="demo-select-small-label">Campus</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={campusSelected}
                label="campus"
                onChange={(event) => setCampusSelected(event.target.value)}
              >
                {campuses.map((campus) => {
                  return (
                    <MenuItem value={campus.id} key={campus.id}>
                      {campus.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid xs={12} md={6} lg={6} sx={{ paddingTop: "3.9rem" }}>
              <CustomLabel name="Service" required={true} />
              <Button
                aria-controls="simple-menu"
                // aria-haspopup="true"
                variant="outlined"
                // onClick={handleClick2}
                className={styles["toggle-button"]}
              >
                Select your Services
              </Button>
              {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                // onClose={handleClose2}
              > */}
              {/* <MenuItem onClick={handleClose2}>Credential Process</MenuItem>
                <MenuItem onClick={handleClose2}>Re-credentialing</MenuItem>
                <MenuItem onClick={handleClose2}>
                  Admissions Document Upload
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  Finacial Aid Documents Upload
                </MenuItem>
                <MenuItem onClick={handleClose2}>Transcript Request</MenuItem> */}
              {/* </Menu> */}
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingTop: "2.2rem", paddingBottom: "2rem" }}
            >
              <Typography className={styles["campus-selection-title"]}>
                Documents
              </Typography>
              <Typography sx={{ color: "gray" }}>
                You have not selected your campus{" "}
              </Typography>
            </Grid>

            <Grid xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <Box
                sx={{
                  backgroundColor: "#efefef",
                  width: "65%",
                  borderRadius: "5px",
                  padding: "0.5rem",
                }}
              >
                <Typography className={styles["box-academic-i"]}>
                  Academic Information
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <Box
                sx={{
                  backgroundColor: "#efefef",
                  width: "65%",
                  borderRadius: "5px",
                  padding: "0.5rem",
                }}
              >
                <Typography className={styles["box-academic-i"]}>
                  Academic Information
                </Typography>
              </Box>
            </Grid>

            <Grid
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <Button variant="contained" className={styles["button-submit"]}>
                  SUBMIT
                </Button>
                <Button variant="contained" className={styles["button-save"]}>
                  SAVE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RequestServices;
