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
import styles from "./requierestyle.module.scss";


interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTable = ({
  documentList,
}: RequiredDocumentsTableProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
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
                <TableCell align="center" key={key} style={{borderWidth:'2.5px',
                 borderColor:'#a5a4a493', fontSize:'1.1rem', color: "#131212b2",fontWeight:'bolder', }} >
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
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{ border: "none"}}
                  >
                    <Box
                      sx={{
                        display: "flex",              
                        backgroundColor:"#eeeeee",
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        height: "3.5rem",
                        flexDirection:'row',
                        width:'130%',
                        alignItems:'center'
                      }}
                    >
                      <Box
                        sx={{
                          padding: "0.5rem",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                          color: "#131212b2",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {ExtractWordsBetweenParentheses(row.description)}
                        <p
                          style={{
                            color: "red",
                            paddingLeft: "0.5rem",
                          }}
                        >
                          {TitleRed(row.description)}
                        </p>
                      </Box>
                    </Box>
                  </TableCell >

                  <TableCell
                  align="center"
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "#131212b2",
                    }}
                  >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#eeeeee",
                        height: "3.5rem",
                        width:'140%',
                        alignItems:'center'
                      }}>
                    {formatDate(row.created)}


                    </Box>
                  </TableCell>


                  <TableCell align="center" style={{ border: "none",  }}>
                    <div style={{
                  }}>

                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor:"#eeeeee",
                      height: "3.5rem",
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      width:'145%',
                      alignItems:'center'
                    }}>
                    <StatusButton statusName={row.status_desc as string} />

                    </Box>

                    </div>
                  </TableCell>
                  {/* Acciones */}
                  <TableCell align="center" style={{ border: "none", 
                
                   }}>
                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor: "#eeeeee",                 
                      height: "3.5rem",
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      width:'120%'
                    }}>
                    <div style={{
                      border: "none",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent:'space-between',
                      width:'5rem'
                    }} >
                    <ChatIcon
                        sx={{
                          fontSize: "1.4rem",
                          color: row.ob_message ? "#f7941d" : "#f7951d81",
                          cursor: "pointer",
                          height: "30px",
                          width: "30px",
                          
                        }}
                        onClick={() => displayModal(row.ob_message)}
                      />
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
                                color: "#e0e0e0",
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
                     


                    </div>
                    </Box>
                   
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
