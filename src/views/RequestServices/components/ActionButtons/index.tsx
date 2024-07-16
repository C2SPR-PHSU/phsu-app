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
import { editProfile } from "@/utils/functions";

interface CampusDocumentData {
  id: string;
  name: string;
  description: string;
  type: string;
  mandatory: string;
}

interface UserDocumentData {
  id: string;
  name: string;
  description: string;
  type: string;
  campus_document_user_id: string;
  campus_user_id: string;
  mandatory: string;
  ob_handler_id: string;
  ob_message: string;
  ob_build: string;
  status: string;
  extension: string;
  status_desc: string;
  created: string;
  url: string;
}

interface IActionButtonsProps {
  userDocuments: any,
  campusDocuments: any,
  isMobile: boolean,
  campusStatus: number;
  selectedCampus: string;
  // Yeah, yeah... I should use Context
  selectedETerm: number;
  selectedAYear: number;
  enabledSubmit: boolean;
  campusData: any;
  getUserCampusInfo: (id: string) => void;
  setLoading: (value: boolean) => void;
  isSaveDisabled: boolean;
}

const ActionButtons = ({
  userDocuments,
  campusDocuments,
  isMobile,
  campusStatus,
  selectedCampus,
  enabledSubmit,
  getUserCampusInfo,
  academicForm,
  personalForm,
  campusData,
  setLoading,
  isSaveDisabled
}: any) => {

  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  useEffect(() => {
    console.log('compare documents')
    console.log(compareDocuments(campusDocuments, userDocuments))
    // console.log(campusDocuments)
  }, [campusDocuments, userDocuments]);

  function compareDocuments(campusDocuments: CampusDocumentData[], userDocuments: UserDocumentData[]): boolean {

    if (!Array.isArray(campusDocuments) || !Array.isArray(userDocuments)) {
      console.error('Error: Ambos parámetros deben ser arrays.');
      return false;
    }
    // Filtra los documentos obligatorios en campusDocuments
    const mandatoryCampusDocs = campusDocuments.filter(doc => doc.mandatory === "1");

    // Array para almacenar los documentos faltantes o con estado incorrecto
    const missingOrInvalidDocs: CampusDocumentData[] = [];

    // Verifica que cada documento obligatorio en campusDocuments exista en userDocuments y tenga el estado correcto
    const allDocsExist = mandatoryCampusDocs.every(mandatoryDoc => {
      const userDoc = userDocuments.find(userDoc =>
        userDoc.description === mandatoryDoc.description && userDoc.mandatory === "1"
      );

      // Verifica que el documento exista y que su estado sea distinto de "0"
      const existsAndValid = userDoc && userDoc.status !== "0";

      if (!existsAndValid) {
        missingOrInvalidDocs.push(mandatoryDoc);
      }

      return existsAndValid;
    });

    if (!allDocsExist) {
      console.error("Los siguientes documentos obligatorios faltan o tienen un estado incorrecto en los documentos del usuario:");
      missingOrInvalidDocs.forEach(doc => {
        console.error(`- ${doc.name} (${doc.description})`);
      });
    }

    return allDocsExist;
  }


  const onSubmit = async (): Promise<void> => {
    await sendAcademicInformation();
    console.log('Academic Information saved');

    await sendToOnBase();
    console.log('Files and Data sent to Onbase');
  };

  const sendToOnBase = async () => {
    setLoading(true)
    try {
      await submitDocument(parseInt(selectedCampus), token);
      getUserCampusInfo(selectedCampus);
      setAlert("Documents Sent to OnBase!", "success");
      // sendAcademicInformation();
      setLoading(false)
    } catch (error) {
      setLoading(false)
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
      const response = await editProfile(token, personalForm);
      response.action;
      setAlert("Info Saved successfully!", "success");
    } catch (error) {
      setAlert("Something happened. Try again later", "error");
    }
  };

  useEffect(() => {
    // console.log(academicForm);
    // validateSubmit();
    console.log(campusStatus, selectedCampus, checkFormsValid());
  }, [campusStatus, selectedCampus, academicForm, personalForm]);

  const checkFormsValid = () => {
    const formValues = [{ ...personalForm }, { ...academicForm }];

    const isValidField = (key: string, value: any) => {
      if (['middle_name', 'second_last_name'].includes(key)) {
        // Estos campos pueden estar vacíos, por lo que los consideramos válidos en cualquier caso
        return true;
      }
      return value !== null && value !== undefined && value !== '' && value.toString() !== '0';
    };

    formValues.forEach(form => {
      Object.entries(form).forEach(([key, value]) => {
        if (!isValidField(key, value)) {
          console.log(`Invalid field: ${key}, Value: ${value}`);
        }
      });
    });

    return formValues.every(form =>
      Object.entries(form).every(([key, value]) => isValidField(key, value))
    );
  };

  const validateSubmit = () => {
    // if (campusStatus === 0) {
    //   console.log("Submit disabled: campusStatus is 0");
    // }
    if (!selectedCampus) {
      console.log("Submit disabled: selectedCampus is not set");
    }
    if (!checkFormsValid()) {
      console.log("Submit disabled: Forms are not valid");
    }
    if (!compareDocuments(campusDocuments, userDocuments)) {
      console.log("Submit disabled: Documents are not valid");
    }
  };

  const isSubmitDisabled = () => {
    const conditions = {
      selectedCampus: !selectedCampus,
      formsValid: !checkFormsValid(),
      documentsValid: !compareDocuments(campusDocuments, userDocuments),
    };

    Object.entries(conditions).forEach(([condition, isInvalid]) => {
      if (isInvalid) {
        console.log(`Submit disabled: ${condition} is invalid`);
      }
    });

    return Object.values(conditions).some(isInvalid => isInvalid);
  };

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{ paddingBottom: "1.2rem", paddingTop: "1rem" }}
    >
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : 'row' }}>
        <Button
          variant="contained"
          className={styles["button-save"]}
          disabled={!checkFormsValid() || isSaveDisabled}
          onClick={() => sendAcademicInformation()}
        >
          SAVE
        </Button>

        {campusStatus < 2 && (
          <Button
            onClick={() => onSubmit()}
            variant="contained"
            className={styles["button-submit"]}
            sx={{
              "&.Mui-disabled": {
                opacity: "0.6",
                color: "white",
              },
              marginLeft: isMobile ? '0' : '1rem !important',
              marginBottom: isMobile ? '1rem !important' : '0rem !important'
            }}
            disabled={isSubmitDisabled() || isSaveDisabled}
          >
            SUBMIT
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default ActionButtons;
