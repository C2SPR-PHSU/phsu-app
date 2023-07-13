import { ChangeEvent, useEffect, useState } from "react";
import {
  Accordion,
  FormControl,
  Select,
  MenuItem,
  AccordionSummary,
  AccordionDetails,
  Typography, 
  Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles.module.scss";
import CustomLabel from '@/components/CustomLabel';
import { selectStyles } from '@/views/RequestServices/constants';
import { getAcademicYears } from '@/views/RequestServices/functions';

const AccordionAcademicInfo = () => {

  const [selectedAYear, setSelectedAYear] = useState('');
  const [academicYears, setAcademicYears] = useState<number[]>([]);

  useEffect(() => {
    getAllAcademicYears()
  }, [])

  const getAllAcademicYears = async () => {
    try {
      const response = await getAcademicYears();
      setAcademicYears(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Accordion sx={{
        backgroundColor: "#efefef",
        width: "100%",
        borderRadius: "5px",
        padding: "0.5rem",
        marginBottom: "1.5rem !important"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles["box-academic-i"]}>
            Academic Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ py: 1 }}>
              {/* First Row */}
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <FormControl fullWidth={true} variant="outlined" sx={selectStyles}>
                    <CustomLabel name="Entrance Academic Year" required={true} />
                    <Select
                      value={selectedAYear || "placeholder"}
                      onChange={e => setSelectedAYear(e.target.value)}
                    >
                      <MenuItem value={"placeholder"} disabled>
                        Select your Campus
                      </MenuItem>
                      { academicYears.map((option) => (
                        <MenuItem key={option} value={option}>{ option }</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <CustomLabel name="Entrance Term" required={true} />
                  {/* <MyTextField
                    name="entranceTerm"
                    placeholder="Entrance Term"
                    value={formValues.entranceTerm}
                    onValueChange={handleInputChange}
                  /> */}
                </div>
              </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordionAcademicInfo;