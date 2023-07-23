import React, { useState, useEffect, useRef } from "react";
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
} from "@mui/material";
import { tableHeaders } from "../RequiredDocumentsTable/constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageModal from "../MessageModal";
import ChatIcon from "@mui/icons-material/Chat";

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTableMobile: React.FC<RequiredDocumentsTableProps> = ({
  documentList,
}) => {
  // reference
  const myheight = useRef<HTMLDivElement | null>(null);
  const myheightCell = useRef<HTMLDivElement | null>(null);

  const [minHeightValue, setMinHeightValue] = useState(100);
  const [minHeightValueCell, setMinHeightValueCell] = useState(100);

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  useEffect(() => {
    // Verificar si la referencia está disponible y calcular la altura real
    if (myheight.current) {
      setMinHeightValue(myheight.current.offsetHeight);
    }
    if (myheightCell.current) {
      setMinHeightValueCell(myheightCell.current.offsetHeight);
    }
  }, [myheight, myheightCell]);

  // <----------------------------- View Mobile ------------------------------------>

  const displayModal = (message: string) => {
    setOpenModal(true);
    setModalMessage(message);
  };

  return (
    <TableContainer sx={{ display: "flex", flexDirection: "row" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders?.map((header) => {
                if (header.title !== "Action") {
                  return (
                    <TableCell align="center" key={header.id}>
                      <div ref={myheight}>{header.title}</div>
                    </TableCell>
                  );
                }
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
                      <TableCell component="th" scope="row" ref={myheightCell}>
                        <Typography>{row.description}</Typography>
                      </TableCell>

                      <TableCell align="center">
                        {formatDate(row.created)}
                      </TableCell>
                      <TableCell align="center">
                        <StatusButton statusName={row.status_desc as string} />
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
      <TableContainer sx={{ width: "15vh" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders?.map((header) => {
                if (header.title === "Action") {
                  return (
                    <TableCell align="center" key={header.id}>
                      <div
                        style={{
                          minHeight: minHeightValue,
                        }}
                      >
                        {header.title}
                      </div>
                    </TableCell>
                  );
                }
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
                      {/* actions */}
                      <TableCell align="center">
                        <div
                          style={{
                            minHeight: minHeightValueCell,
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
                          {myheightCell.current?.offsetHeight}
                        </div>
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
    </TableContainer>
  );
};

export default RequiredDocumentsTableMobile;
