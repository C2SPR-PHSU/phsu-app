import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableHeaders } from "../RequiredDocumentsTable/constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageModal from "../MessageModal";
import ChatIcon from "@mui/icons-material/Chat";
import UploadIcon from "@mui/icons-material/Upload";
import { uploadDocument, deleteDocument } from "@/views/RequestServices/functions";
import useAlert from "@/hooks/useAlert";
import useAuthStore from "@/hooks/useAuthStore";
interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTableMobile: React.FC<RequiredDocumentsTableProps> = ({
  documentList,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { setAlert } = useAlert();
  const token = useAuthStore((state: any) => state.token);
  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  // <----------------------------- View Mobile ------------------------------------>

  const displayModal = (message: string) => {
    setOpenModal(true);
    setModalMessage(message);
  };

  const handleUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    campusId: number,
    documentId: string
  ) => {
    if (!e.target.files) return;
    const document = e.target.files[0];
    try {
      await uploadDocument({ campusId, documentId, document, token });
      setAlert('Documents uploaded Successfully!', 'success');
    } catch (error) {
      setAlert('Something happened. Try again later', 'error');
    }
  };

  return (
    <>
      {
        documentList.length > 0 ?
          documentList?.map((row, index) => (

            <Box
              key={index}
              sx={{
                display: "flex",
                marginBottom: "2rem !important",
                padding: "1.5rem",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Grid container>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    // onClick={() => {
                    //   handleModal(`${row.service} - ${row.campus_name}`);
                    //   setCampusId(row.campus_id);
                    //   setDocumentId(row.id);
                    // }}
                    sx={{
                      cursor: 'pointer',
                      display: "flex",
                    }}
                  >
                    {row.description}
                  </Typography>
                </Grid>

                <Grid container item xs={12} sx={{ marginY: '1rem !important' }}>
                  <StatusButton statusName={row.status_desc as string} />
                </Grid>


                <Grid container item xs={12} justifyContent={'space-between'}>
                  <Grid item>
                    <Typography sx={{ fontSize: '0.5rem', fontWeight: 'light', textAlign: 'center' }}>
                      Created at
                    </Typography>
                    <Typography>
                      {formatDate(row.created)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {parseInt(row.status, 10) < 2 ? (
                      <Button
                        component="label"
                        sx={{
                          padding: '0 !important',
                          margin: '0 !important',
                          minWidth: 'auto',
                          minHeight: 'auto',
                          lineHeight: 0,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        startIcon={
                          <UploadIcon
                            sx={{ color: "#009999", cursor: "pointer", fontSize: "1.4rem", }}
                          />
                        }
                      >
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleUpload(e, row.campus_user_id, row.id)}
                          hidden
                        />
                      </Button>


                    ) :
                      <UploadIcon
                        sx={{ color: "#e0e0e0", cursor: "pointer" }}
                      />
                    }

                    <IconButton>
                      <VisibilityIcon
                        onClick={() => {
                          if (row.url !== '') {
                            console.log(row)
                            window.open(row.url, "_blank")
                          }
                        }}
                        sx={{
                          color: "rgba(0, 168, 168, 1)",
                        }}
                      />
                    </IconButton>

                    {row.ob_message && (
                      <IconButton>
                        <ChatIcon
                          sx={{
                            fontSize: "1.4rem",
                            color: "#f7941d",
                            cursor: "pointer",
                            marginLeft: "0.5rem !important",
                          }}
                          onClick={() => displayModal(row.ob_message)}
                        />
                      </IconButton>
                    )}
                  </Grid>
                </Grid>

              </Grid>

            </Box >
          ))
          :
          <Typography textAlign="center" sx={{ marginY: '3rem !important' }}>No content here</Typography>
      }
    </>

  );
};

export default RequiredDocumentsTableMobile;
