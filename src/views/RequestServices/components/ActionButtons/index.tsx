import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import styles from "./styles.module.scss";
import { submitStatus } from "@/views/RequestServices/constants";
import {
  getUserCampus,
  submitDocument,
  updateAcademicInformation,
} from "@/views/RequestServices/functions";
import useAlert from "@/hooks/useAlert";
import useAuthStore from "@/hooks/useAuthStore";
import { UserModify } from "./../../../Profile/users";

interface IActionButtonsProps {
  campusStatus: number;
  selectedCampus: string;
  // Yeah, yeah... I should use Context
  selectedETerm: number;
  selectedAYear: number;
  enabledSubmit: boolean;
  getUserCampusInfo: (id: string) => void;
  formsValid: boolean;
}

const ActionButtons = ({
  campusStatus,
  selectedCampus,
  enabledSubmit,
  getUserCampusInfo,
  formsValid,
  academicForm,
  personalForm
}: any) => {
  useEffect(() => {
    console.log(campusStatus, " ", enabledSubmit);
  }, []);

  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const sendToOnBase = async () => {
    try {
      await submitDocument(parseInt(selectedCampus), token);
      getUserCampusInfo(selectedCampus);
      setAlert("Documents Sent to OnBase!", "success");
    } catch (error) {
      setAlert("Something happened. Try again later", "error");
    }
  };

  const sendAcademicInformation = async () => {
    try {
      await updateAcademicInformation(
        parseInt(selectedCampus),
        academicForm.term_id,
        academicForm.academic_year,
        token
      );
      const response = await UserModify(token, personalForm);
      response.action;
      setAlert("Info sent successfully!", "success");
    } catch (error) {
      setAlert("Something happened. Try again later", "error");
    }
  };


  useEffect(() => {
    console.log(campusStatus, ' ', selectedCampus, ' ', formsValid)
  }, [campusStatus, selectedCampus, formsValid]);


  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {campusStatus < 2 && (
          <Button
            onClick={() => sendToOnBase()}
            variant="contained"
            className={styles["button-submit"]}
            sx={{
              "&.Mui-disabled": {
                opacity: "0.6",
                color: "white",
              },
            }}
            disabled={campusStatus > 0 || !selectedCampus || !formsValid}
          >
            SUBMIT
          </Button>
        )}
        <Button
          variant="contained"
          className={styles["button-save"]}
          disabled={!formsValid}
          onClick={() => sendAcademicInformation()}
        >
          SAVE
        </Button>
      </Box>
    </Grid>
  );
};

export default ActionButtons;
