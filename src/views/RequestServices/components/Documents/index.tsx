import { ChangeEvent, useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Box,
  Typography,
  Button,
  LinearProgress,
  Fade,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  uploadDocument,
  deleteDocument,
} from "@/views/RequestServices/functions";
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
  isMobile: boolean;
  isUploading?: boolean;
  onUploadStart?: (documentId: string) => void;
  onUploadEnd?: (documentId: string) => void;
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
  isMobile,
  isUploading = false,
  onUploadStart,
  onUploadEnd,
}: IDocumentsProps) => {
  const token = useAuthStore((state: any) => state.token);
  const [checked, setChecked] = useState(false);
  const { setAlert } = useAlert();
  const [currentDocument, setCurrentDocument] =
    useState<IUserDocumentsData | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const doc = userDocuments?.find((doc) => doc.id === documentId);
    setCurrentDocument(doc || null);
  }, [documentId, userDocuments, checked, currentDocument]);

  const validateFile = (file: File): string[] => {
    const errors: string[] = [];

    if (file.type !== "application/pdf") {
      errors.push("File must be a PDF");
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      errors.push("File must not exceed 10MB");
    }

    return errors;
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const document = e.target.files[0];

    const validationErrors = validateFile(document);

    if (validationErrors.length > 0) {
      setAlert(validationErrors.join(". "), "error");
      e.target.value = "";
      return;
    }

    try {
      onUploadStart?.(documentId);

      await uploadDocument({ campusId, documentId, document, token });
      requestUserDocuments();
      setAlert("Documents uploaded Successfully!", "success");
      setChecked(true);
    } catch (error) {
      setChecked(false);
      setAlert("Something happened. Try again later", "error");
    } finally {
      onUploadEnd?.(documentId);
    }
  };

  const deleteDialogOpen = () => {
    setOpen(true);
  };

  const deleteDialogClose = () => {
    setOpen(false);
  };

  const handleDeleteDocument = async () => {
    try {
      onUploadStart?.(documentId);

      await deleteDocument({ campusId, documentId, token });
      requestUserDocuments();
      setAlert("Documents Deleted Successfully!", "success");
      setChecked(false);
    } catch (error) {
      setAlert("Something happened. Try again later", "error");
    } finally {
      onUploadEnd?.(documentId);
    }
    deleteDialogClose();
  };

  return (
    <>
      {currentDocument && (
        <Grid
          container
          sx={
            isMobile
              ? {
                  display: "flex",
                  marginBottom: "2rem !important",
                  padding: "1.5rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: isUploading ? "none" : "translateY(-4px)",
                    boxShadow: isUploading
                      ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                      : "10px 12px 24px rgba(0, 0, 0, 0.2)",
                  },
                  opacity: isUploading ? 0.7 : 1,
                }
              : {
                  marginBottom: "2rem !important",
                  opacity: isUploading ? 0.7 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }
          }
        >
          <Fade in={isUploading}>
            <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
              <LinearProgress
                sx={{
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#009999",
                    borderRadius: 2,
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#009999",
                  fontSize: "0.75rem",
                  marginTop: "0.5rem",
                  display: "block",
                }}
              >
                {isUploading ? "Processing document..." : ""}
              </Typography>
            </Grid>
          </Fade>

          <Grid
            item
            xs={12}
            md={8}
            sx={{ textAlign: isMobile ? "center !important" : "start" }}
          >
            <Typography
              sx={{
                fontFamily: "GothamMedium !important",
                fontSize: isMobile ? "1rem" : "1.2rem",
                fontWeight: "bolder",
                display: "inline-block",
                opacity: isUploading ? 0.6 : 1,
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
                    opacity: isUploading ? 0.6 : 1,
                  }}
                >
                  *
                </Typography>
              )}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{ marginY: isMobile ? "1rem !important" : "0.5rem" }}
          >
            <Fade in={!isUploading}>
              <div className={styles["document-actions-button"]}>
                <div className={styles["rounded-div"]}>
                  <Button
                    component="label"
                    disabled={isUploading}
                    sx={{
                      minWidth: "16px !important",
                      padding: "0px !important",
                    }}
                    startIcon={
                      <UploadIcon
                        sx={{
                          color: isUploading ? "#ccc" : "#e0e0e0",
                          cursor: isUploading ? "not-allowed" : "pointer",
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
                      disabled={isUploading}
                    />
                  </Button>
                </div>

                {currentDocument &&
                currentDocument.status !== "0" &&
                campusStatus < 2 ? (
                  <div className={styles["rounded-div"]}>
                    <Button
                      component="label"
                      disabled={isUploading}
                      sx={{
                        minWidth: "16px !important",
                        padding: "0px !important",
                      }}
                      startIcon={
                        <DeleteIcon
                          sx={{
                            color: isUploading ? "#ccc" : "#e0e0e0",
                            cursor: isUploading ? "not-allowed" : "pointer",
                            fontSize: "24px !important",
                          }}
                          onClick={() => {
                            if (!isUploading) deleteDialogOpen();
                          }}
                        />
                      }
                    />
                  </div>
                ) : (
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
                    />
                  </div>
                )}

                {currentDocument && currentDocument.status !== "0" ? (
                  <div className={styles["rounded-div"]}>
                    <VisibilityIcon
                      sx={{
                        fontSize: "24px !important",
                        color: isUploading ? "#ccc" : "#e0e0e0",
                        cursor: isUploading ? "not-allowed" : "pointer",
                      }}
                      onClick={() => {
                        if (!isUploading && currentDocument.url !== "") {
                          window.open(currentDocument.url, "_blank");
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className={styles["rounded-div-disabled"]}>
                    <VisibilityIcon
                      sx={{
                        fontSize: "24px !important",
                        color: "#e0e0e0",
                      }}
                    />
                  </div>
                )}
              </div>
            </Fade>
          </Grid>

          <Grid item xs={12} md={2}>
            <div className={styles["update-column-wrapper"]}>
              {currentDocument &&
              currentDocument.status !== "0" &&
              !isUploading ? (
                <CheckIcon
                  sx={{
                    color: "#f7941d",
                    fontSize: "25px !important",
                    marginTop: "-1rem !important",
                  }}
                />
              ) : null}
            </div>
            {isMobile &&
              currentDocument &&
              currentDocument.status !== "0" &&
              !isUploading && (
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    textAlign: "center",
                    marginTop: "-1rem !important",
                    color: "#f7941d",
                  }}
                >
                  File Uploaded
                </Typography>
              )}
          </Grid>
        </Grid>
      )}

      <Dialog open={open && !isUploading} onClose={deleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this document?
            <br />
            <b>{currentDocument?.description}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteDialogClose}>No</Button>
          <Button onClick={handleDeleteDocument}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Documents;
