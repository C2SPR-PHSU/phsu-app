import { ChangeEvent, useEffect, useState } from "react";
import {
  Accordion,
  FormControl,
  Select,
  MenuItem,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles.module.scss";
import CustomLabel from '@/components/CustomLabel';
import { selectStyles } from '@/views/RequestServices/constants';
import { IEntranceTermsData, ICampusData } from '@/views/RequestServices/types';
import { getAcademicYears, getEntranceTerms } from '@/views/RequestServices/functions';
import { set } from "lodash";

interface IAccordionAcademicInfoProps {
  campusData: ICampusData,
  campusId: string;
  entranceTermId: (id: number) => void;
  academicYearId: (id: number) => void;
}

const AccordionAcademicInfo = ({ campusData, campusId, entranceTermId, academicYearId }: IAccordionAcademicInfoProps) => {

  const [selectedAYear, setSelectedAYear] = useState('');
  const [academicYears, setAcademicYears] = useState<number[]>([]);
  const [selectedETerm, setSelectedETerm] = useState('');
  const [entranceTerms, setEntranceTerms] = useState<IEntranceTermsData[]>([]);

  useEffect(() => {
    getAllAcademicYears();
  }, [])




  useEffect(() => {
    if (!campusData) return;
    setSelectedAYear(campusData.academic_year !== '' ? campusData.academic_year : '');
    setSelectedETerm(campusData.term_id !== 0 ? campusData.term_id.toString() : '');
    console.log(campusData);
  }, [campusData]);


  useEffect(() => {
    if (campusId) getAllEntranceTerms();
  }, [campusId])

  const getAllAcademicYears = async () => {
    try {
      const response = await getAcademicYears();
      setAcademicYears(response)
    } catch (error) { console.log(error) }
  }

  const getAllEntranceTerms = async () => {
    try {
      const response = await getEntranceTerms(campusId);
      setEntranceTerms(response)
    } catch (error) { console.log(error) }
  }

  return (
    <>
      <Accordion
        expanded={true}
        sx={{
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
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth={true} variant="outlined" sx={selectStyles}>
                <CustomLabel name="Entrance Academic Year" required={true} />
                <Select
                  value={selectedAYear || "placeholder"}
                  onChange={e => {
                    setSelectedAYear(e.target.value)
                    academicYearId(parseInt(e.target.value))
                  }
                  }
                >
                  <MenuItem value={"placeholder"} disabled>
                    Select Academic Year
                  </MenuItem>
                  {academicYears?.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth={true} variant="outlined" sx={selectStyles} disabled={campusId === ''}>
                <CustomLabel name="Entrance Term" required={true} />
                <Select
                  value={selectedETerm || "placeholder"}
                  onChange={e => {
                    setSelectedETerm(e.target.value)
                    entranceTermId(parseInt(e.target.value))
                  }
                  }
                >
                  <MenuItem value={"placeholder"} disabled>
                    Select Entrance Term
                  </MenuItem>
                  {entranceTerms?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordionAcademicInfo;