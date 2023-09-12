import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from "@mui/material";
import { tableHeaders } from "./constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatIcon from "@mui/icons-material/Chat";
import MessageModal from "../MessageModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { formatDate } from "@/utils";
import RequiredDocumentsTableMobile from "./requiereTableMobile";
import { ExtractWordsBetweenParentheses } from "@/utils";
import { TitleRed } from "@/utils";
import styles from "./../table/styles.module.scss";



interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTable = ({
  documentList,
}: RequiredDocumentsTableProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const displayModal = (message: string) => {
    setOpenModal(true);
    setModalMessage(message);
  };

  if (isMobile) {
    return (
      <>
        <RequiredDocumentsTableMobile
          documentList={documentList}
          displayModal={displayModal}
          modalMessage={modalMessage}
        />
      </>
    );
  }

  return (
    <TableContainer >
      <Table aria-label="simple table" >
        <TableHead >
          <TableRow>
            {tableHeaders?.map((header, key) => {
              return (
                <TableCell align="center" key={key} style={{borderWidth:'2.5px', borderColor:'#a5a4a493'}} >
                  {header.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody >
          {documentList.length ? (
            documentList?.map((row) => {
              return (
                <TableRow
                  key={row.id} // Agrega una clave única aquí, asumiendo que 'row.id' es único
                  
                >
                  <TableCell component="th" scope="row" style={{ border: 'none' }}>
                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#eeeeee",
                      borderBottomLeftRadius: "10px",
                      borderTopLeftRadius: "10px",
                      width: "280%",
                      height:'4rem',
                      borderTopRightRadius:'10px',
                      borderBottomRightRadius:'10px',
                    }}>
                       <Box
                        sx={{       
                          padding: "0.5rem",
                          fontSize: "1rem",
                        }}
                      
                      >
                        {ExtractWordsBetweenParentheses(row.description)}
                        <p
                          style={{
                            color: "red",
                          }}
                        >
                          {TitleRed(row.description)}
                        </p>
                      </Box>

                    </Box>
                  </TableCell>

                  <TableCell align="center" style={{ border: 'none' }}>
                    {formatDate(row.created)}
                  </TableCell>
                  <TableCell align="center" style={{ border: 'none' }}>
                    <StatusButton statusName={row.status_desc as string} />
                  </TableCell>
                  {/* Acciones */}
                  <TableCell align="center" style={{ border: 'none' }}>
                    <>
                      {row.url ? (
                        <a
                          href={row.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className={styles["rounded-div"]}>
                  <VisibilityIcon
                    sx={{
                      fontSize: "24px !important",
                      color: "#e0e0e0"
                    }}
                  />
                </div>
                        </a>
                      ) : (
                        <VisibilityIcon
                          sx={{
                            color: "#009999",
                            cursor: "default",
                            opacity: 0.5,
                          }}
                        />
                      )}
                      {row.ob_message && (
                        <ChatIcon
                          sx={{
                            fontSize: "1.4rem",
                            color: "#f7941d",
                            cursor: "pointer",
                            marginLeft: "0.5rem !important",
                          }}
                          onClick={() => displayModal(row.ob_message)}
                        />
                      )}
                    </>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell align="center" scope="row">
                <Typography textAlign="center">
                  There is no content here
                </Typography>
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
