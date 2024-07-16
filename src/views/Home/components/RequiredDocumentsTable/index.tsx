import { ChangeEvent, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { tableHeaders } from "./constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatIcon from "@mui/icons-material/Chat";
import MessageModal from "../MessageModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";
import { uploadDocument, deleteDocument } from "@/views/RequestServices/functions";
import useAlert from "@/hooks/useAlert";
import RequiredDocumentsTableMobile from "../RequieredDocumentsTableMobile";
import useAuthStore from "@/hooks/useAuthStore";

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
  tableType: "sent" | "received";
}

const RequiredDocumentsTable = ({
  documentList,
  tableType
}: RequiredDocumentsTableProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { setAlert } = useAlert();
  const token = useAuthStore((state: any) => state.token);

  useEffect(() => {
    console.log(documentList)
  }, []);

  // const [componentHeights, setComponentHeights] = useState<number[]>([]);

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);

    //
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Sumamos 1 al mes, ya que en JavaScript los meses empiezan desde 0 (enero) hasta 11 (diciembre).
    const year = date.getFullYear().toString();

    //
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  }

  if (isMobile) {
    return (
      <>
        <RequiredDocumentsTableMobile documentList={documentList} tableType={tableType} />
      </>
    );
  }

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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders?.map((header) => {
              return (
                <TableCell align="center" key={header.id}>
                  {header.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {documentList.length ? (
            documentList?.map((row, index) => {
              return (
                <>
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography>{row.description}</Typography>
                    </TableCell>

                    <TableCell align="center">
                      {formatDate(row.created)}
                    </TableCell>
                    <TableCell align="center">
                      <StatusButton statusName={row.status_desc as string} />
                    </TableCell>

                    {/* actions */}
                    <TableCell align="center" sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <>
                        {tableType === "sent" && row.status !== "4" &&
                          <Button
                            component="label"
                            sx={{
                              padding: 0,
                              margin: 0,
                              minWidth: 36,  // Establece un ancho mínimo común
                              minHeight: 36, // Establece una altura mínima común
                              lineHeight: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            startIcon={
                              <UploadIcon
                                sx={{ color: "#009999", cursor: "pointer", fontSize: "1.4rem" }}
                              />
                            }
                          >
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={(e) => handleUpload(e, row.campus_id, row.id)}
                              hidden
                            />
                          </Button>
                        }

                        {row.url ? (
                          <VisibilityIcon
                            sx={{
                              color: "#009999",
                              cursor: "pointer",
                              fontSize: "1.4rem",
                              marginX: '0.5rem', // Espacio horizontal para mantener la consistencia
                            }}
                            onClick={() => {
                              if (row.url !== '') {
                                console.log(row);
                                window.open(row.url, "_blank");
                              }
                            }}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{
                              color: "#e0e0e0",
                              cursor: "default",
                              opacity: 0.5,
                              fontSize: "1.4rem",
                              marginX: '0.5rem',
                            }}
                          />
                        )}
                        {row.ob_message && (
                          <ChatIcon
                            sx={{
                              fontSize: "1.4rem",
                              color: "#f7941d",
                              cursor: "pointer",
                              marginX: '0.5rem',
                            }}
                            onClick={() => displayModal(row.ob_message)}
                          />
                        )}
                      </>
                    </TableCell>

                  </TableRow>
                </>
              );
            })
          ) : (
            <TableRow>
              <TableCell align="center" scope="row">
                <Typography textAlign="center">No content here</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <MessageModal
        open={openModal}
        message={modalMessage}
        handleClose={() => setOpenModal(false)}
      />
    </TableContainer>
  );
};

export default RequiredDocumentsTable;
