import { ChangeEvent, useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Box, Typography, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from "@mui/icons-material/Check";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { uploadDocument, deleteDocument } from "@/views/RequestServices/functions";
import useAuthStore from "@/hooks/useAuthStore";
import styles from "./styles.module.scss";
import useAlert from "@/hooks/useAlert";
import { IUserDocumentsData, ICampusDocumentsData } from "../../types";

interface IDocumentsProps {
  title: string;
  campusId: number;
  campusStatus: number;
  documentId: string;
  mandatory: string;
  getUserCampusInfo: (id: string) => void;
  userDocuments: IUserDocumentsData[];
  campusDocuments: ICampusDocumentsData[];
  requestUserDocuments: () => void;
  isMobile: boolean
}

const Documents = ({
  title,
  campusId,
  campusStatus,
  documentId,
  mandatory,
  getUserCampusInfo,
  userDocuments,
  campusDocuments,
  requestUserDocuments,
  isMobile
}: IDocumentsProps) => {


  const token = useAuthStore((state: any) => state.token);
  const [checked, setChecked] = useState(false);
  const { setAlert } = useAlert();

  const [currentDocument, setCurrentDocument] = useState<IUserDocumentsData | null>(null);

  useEffect(() => {
    const doc = userDocuments?.find(doc => doc.id === documentId);
    setCurrentDocument(doc || null);
    // console.log(currentDocument?.description, ' ', currentDocument?.status)
  }, [documentId, userDocuments, checked, currentDocument]);


  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const document = e.target.files[0];
    try {
      await uploadDocument({ campusId, documentId, document, token });
      requestUserDocuments();
      setAlert('Documents uploaded Successfully!', 'success')
      setChecked(true)
      // getUserCampusInfo(campusId.toString());
    } catch (error) {
      setChecked(false)
      setAlert('Something happened. Try again later', 'error')
    }
  };


  const [open, setOpen] = useState(false);

  const deleteDialogOpen = () => {
    setOpen(true);
  };

  const deleteDialogClose = () => {
    setOpen(false);
  };

  const handleDeleteDocument = async () => {
    try {
      await deleteDocument({ campusId, documentId, token });
      requestUserDocuments();
      setAlert('Documents Deleted Successfully!', 'success')
      setChecked(false)
      // getUserCampusInfo(campusId.toString());
    } catch (error) {
      setAlert('Something happened. Try again later', 'error')
    }
    deleteDialogClose();
  };

  return (
    <>
      {currentDocument && (
        <Grid container
          sx={isMobile
            ? {
              display: "flex",
              marginBottom: "2rem !important",
              padding: "1.5rem",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "10px 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }
            : { marginBottom: "2rem !important", }}
        >
          <Grid item xs={12} md={8} sx={{ textAlign: isMobile ? 'center !important' : 'start' }}>
            <Typography
              sx={{
                fontFamily: "GothamMedium !important",
                fontSize: isMobile ? "1rem" : "1.2rem",
                fontWeight: "bolder",
                display: "inline-block",
              }}
            >
              {title}
              {parseInt(mandatory) !== 0 && (
                <Typography
                  sx={{
                    fontFamily: "GothamMedium !important",
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

          <Grid item xs={12} md={2} sx={{ marginY: isMobile ? '1rem !important' : '0.5rem' }}>
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
                currentDocument && currentDocument.status !== '0' && campusStatus < 2 ?
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
                          onClick={() => { deleteDialogOpen() }}
                        />
                      }
                    >
                    </Button>
                  </div>
                  :
                  <div className={styles["rounded-div-disabled"]}>
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
              }

              {
                currentDocument && currentDocument.status !== '0' ?
                  <div className={styles["rounded-div"]}>
                    <VisibilityIcon
                      sx={{
                        fontSize: "24px !important",
                        color: "#e0e0e0"
                      }}
                      onClick={() => {
                        console.log(currentDocument)
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
                      }}
                    />
                  </div>
              }

            </div>
          </Grid>

          <Grid item xs={12} md={2}>
            <div className={styles["update-column-wrapper"]}>
              {
                currentDocument && currentDocument.status !== '0' ?
                  <CheckIcon sx={{ color: "#f7941d", fontSize: "25px !important", marginTop: '-1rem !important', }} /> :
                  null
              }
            </div>
            {isMobile && currentDocument && currentDocument.status !== '0' &&
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  textAlign: 'center',
                  marginTop: '-1rem !important',
                  color: "#f7941d"
                }}>File Uploaded</Typography>}
          </Grid>

        </Grid>

      )}

      <Dialog open={open} onClose={deleteDialogClose}>
        <DialogTitle>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this document?<br />
            <b>{currentDocument?.description}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteDialogClose}>
            No
          </Button>
          <Button onClick={handleDeleteDocument}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Documents;
