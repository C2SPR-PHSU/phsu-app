import { ChangeEvent, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
// import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
import { uploadDocument } from "@/views/RequestServices/functions";
import useAuthStore from "@/hooks/useAuthStore";
import styles from "./styles.module.scss";

interface IDocumentsProps {
  title: string;
  campusId: number;
  documentId: string;
  mandatory: string;
  getUserCampusInfo: (id: string) => void;
}

const Documents = ({
  title,
  campusId,
  documentId,
  mandatory,
  getUserCampusInfo,
}: IDocumentsProps) => {
  const token = useAuthStore((state: any) => state.token);
  const [checked, setChecked] = useState(false);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const document = e.target.files[0];
    try {
      await uploadDocument({ campusId, documentId, document, token });
      setChecked(true);
      getUserCampusInfo(campusId.toString());
    } catch (error) {
      setChecked(false);
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

                {/* <div className={styles["rounded-div"]}>
                  <DeleteIcon sx={{ color: "#e0e0e0" }} />
                </div> */}

                <div className={styles["rounded-div"]}>
                  <VisibilityIcon sx={{ color: "#e0e0e0" }} />
                </div>
              </div>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={styles["update-column-wrapper"]}>
            <Grid item xs={12}>
              {checked ? <CheckIcon sx={{ color: "#f7941d" }} /> : <></>}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Documents;
