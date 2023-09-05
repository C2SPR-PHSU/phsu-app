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
import { tableHeaders } from "./constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageModal from "../MessageModal";
import ChatIcon from "@mui/icons-material/Chat";
import { formatDate } from "@/utils";
import styles from "./requierestyle.module.scss";
import { TitleRed } from "@/utils";
import { ExtractWordsBetweenParentheses } from "@/utils";

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
  displayModal: (message: string) => void;
  modalMessage: string;
}

const RequiredDocumentsTableMobile: React.FC<RequiredDocumentsTableProps> = ({
  documentList,
  displayModal,
  modalMessage,
}) => {
  const [openModal, setOpenModal] = useState(false);

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

    // getHeight
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

  return (
    <TableContainer sx={{ display: "flex", maxWidth: "86%" }}>
      <Table aria-label="simple table">
        <TableHead sx={{ height: "5vh" }}>
          <TableRow
            sx={{
              display: "flex",
              flexDirection: "row",
              minWidth: "10%",
              justifyContent: "space-between",
            }}
          >
            {tableHeaders?.map((header) =>
              header.title !== "Action" ? (
                <TableCell
                  key={header.id}
                  sx={{ fontSize: "1rem", border: "0px" }}
                >
                  {header.title}
                </TableCell>
              ) : (
                <TableCell
                  key={header.id}
                  sx={{ fontSize: "1rem", border: "0px" }}
                  style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "white",
                    minWidth: "5.2rem",
                  }}
                >
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
                  // "&:last-child td, &:last-child th": { border: 0 },
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  border: "0px",
                  minWidth: "110%",
                  display: "flex",
                }}
                ref={(e) => (rowRefArray.current[index] = e)}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    border: "0px",
                  }}
                >
                  <Box
                    ref={(el: HTMLDivElement) => (refArray.current[index] = el)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflowY: "auto",
                      minWidth: "4rem",
                      backgroundColor: "#eeeeee",
                      paddingLeft: "1rem",
                      borderBottomLeftRadius: "10px",
                      borderTopLeftRadius: "10px",
                      paddingRight: "0rem",
                      width: "223%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "11rem",
                        padding: "0.5rem",
                        fontSize: "1rem",
                      }}
                      className={styles["font"]}
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
                <TableCell
                  sx={{
                    border: "0px",
                  }}
                >
                  <Typography>{formatDate(row.created)}</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    padding: "0rem",
                    border: "0px",
                  }}
                >
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>

                {/* mantine sobre la tabla */}
                <TableCell
                  sx={{
                    paddingLeft: 0,
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    width: "5.3rem",
                    display: "flex",
                    alignItems: "center",
                    border: "0px",
                  }}
                  style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      overflowY: "auto",
                      backgroundColor: "#eeeeee",
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
                        style={{
                          backgroundColor: "#009999",
                          borderRadius: "100%",
                          width: "1.5rem",
                          height: "1.5rem",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <VisibilityIcon
                          sx={{
                            color: "white",
                            cursor: "pointer",
                            width: "1.2rem",
                            height: "1.2rem",
                          }}
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
              <TableCell>
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

export default RequiredDocumentsTableMobile;
