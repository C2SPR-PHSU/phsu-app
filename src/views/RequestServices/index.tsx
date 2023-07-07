import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, FormControl } from "@mui/material";
import CustomLabel from "@/components/CustomLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./styles.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { getCampuses, getCampusDocuments } from "./functions";
import Documents from './components/Documents';

interface ICampuses {
  id: number;
  name: string;
}
import AccordionServiceRequest from "@/components/AccordionServiceRequest";

const RequestServices = () => {
  const [campuses, setCampuses] = useState<ICampuses[]>([]);
  const [campusSelected, setCampusSelected] = useState(0);
  const [documentList, setDocumentList] = useState([]);
  const [displayList, setDisplayList] = useState(false)
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const getAllCampuses = async () => {
    const response = await getCampuses();
    setCampuses(response);
    setCampusSelected(response[0].id);
    await getDocumentsByCampus(response[0].id)
  };
  
  const getDocumentsByCampus = async (id: number) => {
    const response = await getCampusDocuments(id);
    setDocumentList(response)
  }

  const validateDropdownSelection = () => {
    if(selectedCampus !== '' && selectedService !== '')
    return setDisplayList(false)
  }

  useEffect(() => {
    if(selectedCampus !== '' && selectedService !== '') return setDisplayList(true)
    return setDisplayList(false)
  }, [selectedCampus, selectedService])

  const optionsService = [
    'Admissions Documents Upload',
    'Credentialing Process',
    'Financial Aid Documents Upload',
    'Transcript Requests',
    'Application for Graduation',
    'Graduation Certification',
    'Reasonable Accommodations Application'
  ];

  const [isReady, setIsReady] = useState(false);


  const handleCampusChange = (event: any) => {
    setSelectedCampus(event.target.value);
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
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#009999",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
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
    getDocumentsByCampus(campusSelected)
  }, [campusSelected])

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", padding: '2rem' }}>
        <Box
          sx={{
            // backgroundColor: "red",
            paddingLeft: "5rem",
            paddingTop: "2rem",
            width: "100%"
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
              <Grid xs={12} md={12}>
                <Typography className={styles["campus-selection-title"]}>
                  Campus Selection
                </Typography>
              </Grid>
            </div>

            <div className={styles["form-first-row"]}>
              <Grid item xs={12} md={5} paddingRight={'1rem'}>
                <FormControl fullWidth={true} variant="outlined" sx={selectStyles}>
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

              <Grid item xs={12} md={5} paddingRight={'1rem'}>
                <FormControl fullWidth={true} variant="outlined" sx={selectStyles} disabled={selectedCampus === ''}>
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
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingTop: "2.2rem", paddingBottom: "2rem" }}
            >
              {
                !displayList ? (
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
                    <Grid item xs={8}>
                      <Typography>Documents</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>Actions</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>Updated</Typography> 
                    </Grid>
                    {
                      documentList.map((document) => {
                        return (
                          <Grid item xs={12} key={document.id}>
                            <Documents
                              title={document.name}
                              campusId={campusSelected}
                              documentId={document.id}
                            />
                          </Grid>
                        )
                      })
                    }
                  </Grid>
                )
              }
            </Grid>

            <Grid xs={12} md={12} lg={12} sx={{ paddingBottom: "1.2rem" }}>
              <div className={styles["accordions-wrapper"]}>
                <AccordionServiceRequest />
              </div>
            </Grid>

            <Grid
              xs={12}
              md={12}
              lg={12}
              sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <Button
                  variant="contained"
                  className={styles["button-submit"]}
                  sx={{
                    '&.Mui-disabled': {
                      opacity: "0.6",
                      color: 'white',
                    },
                  }}
                  disabled={!isReady}>
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
