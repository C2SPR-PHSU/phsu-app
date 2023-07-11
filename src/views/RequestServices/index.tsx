import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import CustomLabel from "@/components/CustomLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./styles.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { getCampuses, getCampusDocuments } from "./functions";
import Documents from "./components/Documents";
import useAuthStore from "@/hooks/useAuthStore";
import axios from "axios";
import Alert from "@mui/material/Alert";

interface ICampuses {
  id: number;
  name: string;
}
import AccordionServiceRequest from "@/components/AccordionServiceRequest";

const RequestServices = () => {
  const token = useAuthStore((state: any) => state.token);

  const [campusStatus, setCampusStatus] = useState(0);
  const [onBaseRequest, setOnbaseRequest] = useState(null);

  const [campuses, setCampuses] = useState<ICampuses[]>([]);
  const [campusSelected, setCampusSelected] = useState("");
  const [documentList, setDocumentList] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const getUserCampusInfo = () => {
    console.log("getuserCampusInfo");
    const url = "http://apiphsu.lobsys.net:8080/user/campus/";
    const formData = new FormData();
    formData.append("campus_id", selectedCampus);

    const headers = {
      "Content-Type": "multipart/form-data",
      token: token,
    };

    axios
      .post(url, formData, { headers })
      .then((response) => {
        // handle success, set the row state to the response data
        setCampusStatus(parseInt(response.data.data.status));
        console.log(response.data.data.status);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const sendToOnBase = () => {
    console.log("getuserCampusInfo");
    const url = "http://apiphsu.lobsys.net:8080/user/document/sendOB/";
    const formData = new FormData();
    formData.append("campus_id", selectedCampus);

    const headers = {
      "Content-Type": "multipart/form-data",
      token: token,
    };

    axios
      .post(url, formData, { headers })
      .then((response) => {
        // handle success, set the row state to the response data
        setOnbaseRequest(response.data);
        console.log(response.data);
        setCampusStatus(2);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const getAllCampuses = async () => {
    const response = await getCampuses();
    console.log(response);
    setCampuses(response);
    // setCampusSelected(response[0].id);
    await getDocumentsByCampus(response[0].id);
  };

  const getDocumentsByCampus = async (id: number) => {
    const response = await getCampusDocuments(id);
    setDocumentList(response);
  };

  const validateDropdownSelection = () => {
    if (selectedCampus !== "" && selectedService !== "")
      return setDisplayList(false);
  };

  useEffect(() => {
    if (selectedCampus !== "" && selectedService !== "")
      return setDisplayList(true);
    return setDisplayList(false);
  }, [selectedCampus, selectedService]);

  const optionsService = [
    "Admissions Documents Upload",
    "Credentialing Process",
    "Financial Aid Documents Upload",
    "Transcript Requests",
    "Application for Graduation",
    "Graduation Certification",
    "Reasonable Accommodations Application",
  ];

  const [isReady, setIsReady] = useState(false);

  const handleCampusChange = (event: any) => {
    setSelectedCampus(event.target.value);
    setCampusSelected(event.target.value);
  };

  const handleServiceChange = (event: any) => {
    setSelectedService(event.target.value);
  };

  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const selectStyles = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
      borderRadius: 0,
      border: "2px solid " + "#009999",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "1rem",
      color: "#333333",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#009999",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0.7rem",
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: "#009999",
    },
  };

  useEffect(() => {
    getAllCampuses();
  }, []);

  useEffect(() => {
    getDocumentsByCampus(campusSelected);
    console.log(campusSelected);

    if (campusSelected !== "") getUserCampusInfo();
  }, [campusSelected]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "2rem",
          minHeight: "90vh",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "red",
            paddingLeft: "7rem",
            paddingTop: "2rem",
            width: "90%",
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

            <div className={styles["first-row-title"]}>
              <Grid item xs={12} md={12}>
                <Typography className={styles["campus-selection-title"]}>
                  Campus Selection
                </Typography>
              </Grid>
            </div>

            <div className={styles["form-first-row"]}>
              <Grid item xs={12} md={5} paddingRight={"1rem"}>
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  sx={selectStyles}
                >
                  <CustomLabel name="Campus" required={true} />
                  <Select
                    value={selectedCampus || "placeholder"}
                    onChange={handleCampusChange}
                  >
                    <MenuItem value="placeholder" disabled>
                      Select your Campus
                    </MenuItem>
                    {campuses.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={5} paddingRight={"1rem"}>
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  sx={selectStyles}
                  disabled={selectedCampus === ""}
                >
                  <CustomLabel name="Services" required={true} />
                  <Select
                    value={selectedService || "placeholder"}
                    onChange={handleServiceChange}
                  >
                    <MenuItem value="placeholder" disabled>
                      Select your Service
                    </MenuItem>
                    {optionsService.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </div>

            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingTop: "2.2rem", paddingBottom: "2rem" }}
            >
              {!displayList ? (
                <>
                  <Typography className={styles["campus-selection-title"]}>
                    Documents
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    You have not selected your campus{" "}
                  </Typography>
                </>
              ) : (
                <Grid container>
                  <div className={styles["document-th-wrapper"]}>
                    <Grid item xs={8}>
                      <Typography className={styles["documents-th"]}>
                        Documents
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography className={styles["actions-th"]}>
                        Actions
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography className={styles["actions-th"]}>
                        Updated
                      </Typography>
                    </Grid>
                  </div>

                  {documentList.map((document) => {
                    return (
                      <Grid item xs={12} key={document.id}>
                        <Documents
                          title={document.name}
                          campusId={campusSelected}
                          documentId={document.id}
                          mandatory={document.mandatory}
                          getUserCampusInfo={getUserCampusInfo}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Grid>

            <Grid item xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <div className={styles["accordions-wrapper"]}>
                <AccordionServiceRequest />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                {parseInt(campusStatus) !== 2 && (
                  <Button
                    onClick={sendToOnBase}
                    variant="contained"
                    className={styles["button-submit"]}
                    sx={{
                      "&.Mui-disabled": {
                        opacity: "0.6",
                        color: "white",
                      },
                    }}
                    disabled={parseInt(campusStatus) === 0}
                  >
                    SUBMIT
                  </Button>
                )}

                <Button variant="contained" className={styles["button-save"]}>
                  SAVE
                </Button>
              </Box>
            </Grid>
          </Grid>
          {parseInt(campusStatus) === 2 && (
            <>
              <Alert severity="success" color="success">
                Documments Sent to OnBase!
              </Alert>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RequestServices;
