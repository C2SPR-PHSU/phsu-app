import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid } from '@mui/material';
import styles from "./styles.module.scss";
import { submitStatus } from '@/views/RequestServices/constants';
import { getUserCampus, submitDocument, updateAcademicInformation } from '@/views/RequestServices/functions';
import useAlert from "@/hooks/useAlert";
import useAuthStore from "@/hooks/useAuthStore";

interface IActionButtonsProps {
  campusStatus: number;
  selectedCampus: string;
  // Yeah, yeah... I should use Context
  selectedETerm: number;
  selectedAYear: number;
  enabledSubmit: boolean;
  getUserCampusInfo: (id: string) => void;
}

const ActionButtons = ({ campusStatus, selectedCampus, selectedETerm, selectedAYear, enabledSubmit, getUserCampusInfo, }: IActionButtonsProps) => {

  useEffect(() => {
    console.log(campusStatus, ' ', enabledSubmit)
  }, []);


  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const sendToOnBase = async () => {
    try {
      await submitDocument(parseInt(selectedCampus), token);
      getUserCampusInfo(selectedCampus);
      setAlert('Documents Sent to OnBase!', 'success')
    } catch (error) {
      setAlert('Something happened. Try again later', 'error')
    }
  }

  const sendAcademicInformation = async () => {
    try {
      await updateAcademicInformation(parseInt(selectedCampus), selectedETerm, selectedAYear, token);
      setAlert('Info sent successfully!', 'success')
    } catch (error) {
      setAlert('Something happened. Try again later', 'error')
    }
  }

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {campusStatus < 2 &&
          <Button
            onClick={() => sendToOnBase()}
            variant="contained"
            className={styles["button-submit"]}
            sx={{
              '&.Mui-disabled': {
                opacity: "0.6",
                color: 'white',
              },
            }}
            disabled={campusStatus !== 1 || !enabledSubmit}
          >
            SUBMIT
          </Button>
        }
        <Button
          variant="contained"
          className={styles["button-save"]}
          disabled={selectedETerm && selectedAYear ? false : true}
          onClick={() => sendAcademicInformation()}
        >
          SAVE
        </Button>
      </Box>
    </Grid>
  );
}

export default ActionButtons;