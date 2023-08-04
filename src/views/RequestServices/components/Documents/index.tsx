import { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from "@mui/icons-material/Check";
import { uploadDocument } from "@/views/RequestServices/functions";
import useAuthStore from "@/hooks/useAuthStore";
import styles from "./styles.module.scss";
import useAlert from "@/hooks/useAlert";
import { IUserDocumentsData } from "../../types";

interface IDocumentsProps {
  title: string;
  campusId: number;
  documentId: string;
  mandatory: string;
  getUserCampusInfo: (id: string) => void;
  userDocuments: IUserDocumentsData[];
  requestUserDocuments: () => void;
}

const Documents = ({
  title,
  campusId,
  documentId,
  mandatory,
  getUserCampusInfo,
  userDocuments,
  requestUserDocuments
}: IDocumentsProps) => {


  const token = useAuthStore((state: any) => state.token);
  const [checked, setChecked] = useState(false);
  const { setAlert } = useAlert();

  const [currentDocument, setCurrentDocument] = useState<IUserDocumentsData | null>(null);

  useEffect(() => {
    const doc = userDocuments?.find(doc => doc.id === documentId);
    setCurrentDocument(doc || null);
    // console.log(currentDocument)
  }, [documentId, userDocuments, checked]);


  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log('test')
    if (!e.target.files) return;
    const document = e.target.files[0];
    try {
      await uploadDocument({ campusId, documentId, document, token });
      requestUserDocuments();
      setAlert('Documents uploaded Successfully!', 'success')
      setChecked(true)
      getUserCampusInfo(campusId.toString());
    } catch (error) {
      setChecked(false)
      setAlert('Something happened. Try again later', 'error')
    }
  };



  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className={styles["document-row-wrapper"]}>
            <Grid item xs={10}>
              <Typography
                sx={{
                  fontFamily: "GothamMedium !important",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  display: "inline-block",
                }}
              >
                {title}
                {parseInt(mandatory) !== 0 && (
                  <Typography
                    sx={{
                      fontFamily: "GothamMedium !important",
                      fontSize: "1.2rem",
                      fontWeight: "bolder",
                      color: "red",
                      display: "inline-block",
                      paddingLeft: "8px !important",
                    }}
                  >
                    *
                  </Typography>
                )}
              </Typography>
            </Grid>
            <Grid item xs={2} gap={3}>
              <div className={styles["document-actions-button"]}>
                <div className={styles["rounded-div"]}>
                  <Button
                    component="label"
                    sx={{
                      minWidth: "16px !important",
                      padding: "0px !important",
                    }}
                    startIcon={
                      <UploadIcon
                        sx={{
                          color: "#e0e0e0",
                          cursor: "pointer",
                          fontSize: "24px !important",
                        }}
                      />
                    }
                  >
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleUpload(e)}
                      hidden
                    />
                  </Button>
                </div>

                {
                  currentDocument && currentDocument.status !== '0' ?
                    <div className={styles["rounded-div"]}>
                      <VisibilityIcon
                        sx={{
                          fontSize: "24px !important",
                          color: "#e0e0e0"
                        }}
                        onClick={() => {
                          if (currentDocument.url !== '') {
                            window.open(currentDocument.url, "_blank")
                          }
                        }}
                      />
                    </div>
                    :
                    <div className={styles["rounded-div-disabled"]}>
                      <VisibilityIcon
                        sx={{
                          fontSize: "24px !important",
                          color: "#e0e0e0"
                        }} />
                    </div>
                }


                <div className={styles["rounded-div"]}>
                  <Button
                    component="label"
                    sx={{
                      minWidth: "16px !important",
                      padding: "0px !important",
                    }}
                    startIcon={
                      <DeleteIcon
                        sx={{
                          color: "#e0e0e0",
                          cursor: "pointer",
                          fontSize: "24px !important",
                        }}
                      />
                    }
                  >
                  </Button>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={styles["update-column-wrapper"]}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                {
                  currentDocument && currentDocument.status !== '0' ?
                    <CheckIcon sx={{ color: "#f7941d" }} /> :
                    null
                }
              </Grid>

            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Documents;
