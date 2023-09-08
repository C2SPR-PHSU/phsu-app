import React, { useState, useRef, useLayoutEffect } from "react";
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

  // State variables for heights
  const [heights, setHeights] = useState<number[]>([]);

  //
  const chageTitle = (title: string): string => {
    if (title === "Time") {
      return "Status";
    }
    if (title === "Status") {
      return "Time";
    }
    return title;
  };

  // Calculate and set heights on document list change
  useLayoutEffect(() => {
    const newHeights: number[] = [];
    // getHeight
    refArray.current.forEach((ref) => {
      if (ref) {
        const { height } = ref.getBoundingClientRect();
        newHeights.push(height);
      }
    });
    setHeights(newHeights);
  }, [documentList]);

  return (
    <TableContainer
      sx={{
        display: "flex",
        width: "92%",
      }}
    >
      <Table aria-label="simple table">
        <TableHead sx={{ height: "5vh" }}>
          {documentList.length ? (
            <TableRow>
              {tableHeaders?.map((header) =>
                header.title !== "Action" ? (
                  <TableCell
                    key={header.id}
                    sx={{ fontSize: "1rem", border: "0px" }}
                  >
                    {chageTitle(header.title)}
                  </TableCell>
                ) : (
                  <TableCell
                    key={header.id}
                    sx={{ fontSize: "1rem", border: "0px" }}
                    style={{
                      position: "absolute",
                      right: 0,
                      backgroundColor: "white",
                      minWidth: "5.3rem",
                      ...(documentList.length && {
                        boxShadow: "-1px 0 0 rgba(221, 221, 221, 0.6)",
                      }),
                    }}
                  >
                    {header.title}
                  </TableCell>
                )
              )}
            </TableRow>
          ) : (
            <></>
          )}
        </TableHead>
        <TableBody>
          {documentList.length ? (
            documentList?.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  border: "0px",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingTop: "0.49rem",
                    paddingBottom: "0.52rem",
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
                      width: "270%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "9rem",
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
                  align="center"
                  sx={{
                    padding: "0rem",
                    border: "0px",
                    paddingRight: "1rem",
                  }}
                >
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>
                <TableCell
                  sx={{
                    border: "0px",
                  }}
                >
                  <Typography>{formatDate(row.created)}</Typography>
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
                    boxShadow: "-1px 0 0px rgba(221, 221, 221, 0.6)",
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
                      justifyContent: "space-around",
                      backgroundColor: "#eeeeee",
                      width: "100%",
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      minHeight: `${heights[index]}px`,
                      maxHeight: `${heights[index]}px`,
                      minWidth: "4rem",
                      paddingLeft: "0.3rem",
                    }}
                  >
                    <ChatIcon
                      sx={{
                        fontSize: "1.4rem",
                        color: "#f7941d",
                        cursor: "none",
                        opacity: 0.5,
                        ...(row.ob_message && {
                          opacity: 1,
                          cursor: "pointer",
                        }),
                      }}
                      onClick={() => displayModal(row.ob_message)}
                    />

                    {row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#009999",
                          borderRadius: "100%",
                          width: "1.4rem",
                          height: "1.4rem",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <VisibilityIcon
                          sx={{
                            color: "white",
                            cursor: "pointer",
                            width: "1.1rem",
                            height: "1.1rem",
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
