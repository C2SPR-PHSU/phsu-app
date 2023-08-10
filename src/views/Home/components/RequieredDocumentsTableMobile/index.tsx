import React, { useState, useRef, useEffect } from "react";
import {
  Box,
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
import { formatDate } from "@/utils";

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTableMobile: React.FC<RequiredDocumentsTableProps> = ({
  documentList,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Refs for storing heights of table cells
  const refArray = useRef<(HTMLDivElement | null)[]>([]);
  const rowRefArray = useRef<(HTMLTableRowElement | null)[]>([]);

  // State variables for heights
  const [heights, setHeights] = useState<number[]>([]);
  const [rowHeights, setRowHeights] = useState<number[]>([]);

  // Calculate and set heights on document list change
  useEffect(() => {
    const newHeights: number[] = [];
    const newRowHeights: number[] = [];

    refArray.current.forEach((ref) => {
      if (ref) {
        const { height } = ref.getBoundingClientRect();
        newHeights.push(height);
      }
    });

    setHeights(newHeights);

    rowRefArray.current.forEach((rowRef) => {
      if (rowRef) {
        const { height } = rowRef.getBoundingClientRect();
        newRowHeights.push(height);
      }
    });

    setRowHeights(newRowHeights);
  }, [documentList]);

  // Display modal with a message
  const displayModal = (message: string) => {
    setOpenModal(true);
    setModalMessage(message);
  };

  return (
    <TableContainer sx={{ display: "flex", flexDirection: "row" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead sx={{ height: "10vh" }}>
            <TableRow>
              {tableHeaders?.map(
                (header) =>
                  header.title !== "Action" && (
                    <TableCell align="center" key={header.id}>
                      {header.title}
                    </TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {documentList.length ? (
              documentList?.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                  ref={(e) => (rowRefArray.current[index] = e)}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <Box
                      ref={(el: HTMLDivElement) =>
                        (refArray.current[index] = el)
                      }
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflowY: "auto",
                        minWidth: "4rem",
                        backgroundColor: "#e9e8e8",
                        paddingLeft: "1rem",
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        paddingRight: "0rem",
                        width: "220%",
                      }}
                    >
                      <Typography sx={{ width: "11rem", padding: "0.5rem" }}>
                        {row.description}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography>{formatDate(row.created)}</Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "0rem",
                    }}
                  >
                    <StatusButton statusName={row.status_desc as string} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" scope="row">
                  <Typography textAlign="center">
                    No hay contenido aquí
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
      <TableContainer sx={{ width: "15vh" }}>
        <Table aria-label="simple table">
          <TableHead sx={{ height: "10vh" }}>
            <TableRow>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentList.length ? (
              documentList?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    minHeight: `${rowHeights[index]}px`,
                    maxHeight: `${rowHeights[index]}px`,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TableCell
                    sx={{
                      paddingLeft: 0,
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      width: "5rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        overflowY: "auto",
                        backgroundColor: "#e9e8e8",
                        width: "100%",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                        minHeight: `${heights[index]}px`,
                        maxHeight: `${heights[index]}px`,
                        minWidth: "2rem",
                      }}
                    >
                      {row.url ? (
                        <a
                          href={row.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <VisibilityIcon
                            sx={{ color: "#009999", cursor: "pointer" }}
                          />
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
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" scope="row"></TableCell>
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
    </TableContainer>
  );
};

export default RequiredDocumentsTableMobile;
