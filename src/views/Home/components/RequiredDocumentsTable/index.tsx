import { useState } from "react";
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
import { tableHeaders } from "./constants";
import StatusButton from "@/components/StatusButton";
import { IUserDocumentsData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatIcon from "@mui/icons-material/Chat";
import MessageModal from "../MessageModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
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

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);

    //
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Sumamos 1 al mes, ya que en JavaScript los meses empiezan desde 0 (enero) hasta 11 (diciembre).
    const year = date.getFullYear().toString();

    //
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  // <-----------------------------View Mobile------------------------------------>

  if (isMobile) {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TableContainer
            component={Paper}
            sx={{
              height: "auto",
              display: "flex",
            }}
          >
            <Table aria-label="simple table">
              <TableHead sx={{ display: "flex" }}>
                <TableRow>
                  {/* <---------------------------------- Item 1 minWidth 90vw -------------------------------------- */}
                  {tableHeaders && tableHeaders.length > 0 && (
                    <TableCell
                      align="left"
                      key={tableHeaders[0].id}
                      sx={{ minWidth: "90vw" }}
                    >
                      {tableHeaders[0].title}
                    </TableCell>
                  )}

                  {/* <-------------------- And by default, the rest only have left padding ------------------------> */}
                  {tableHeaders &&
                    tableHeaders.slice(1).map((header) => {
                      if (header.title !== "Action") {
                        return (
                          <TableCell
                            align="center"
                            key={header.id}
                            sx={{ paddingLeft: "2.5rem" }}
                          >
                            {header.title}
                          </TableCell>
                        );
                      }
                      return null;
                    })}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
              >
                {documentList.length ? (
                  documentList?.map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            backgroundColor: "#f4f4f4",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            minWidth: "90vw",
                          }}
                        >
                          {row.description}
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "#f4f4f4",
                          }}
                        >
                          {formatDate(row.created)}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "#f4f4f4",
                          }}
                        >
                          <StatusButton
                            statusName={row.status_desc as string}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell align="center" scope="row">
                      <Typography textAlign="center">
                        No content here
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            component={Paper}
            sx={{
              height: "auto",
              display: "flex",
              maxWidth: "6rem",
              borderLeftColor: "#383838",
            }}
          >
            <Table aria-label="simple table">
              <TableHead sx={{ display: "flex" }}>
                <TableRow>
                  {tableHeaders?.map((header) => {
                    if (header.title === "Action") {
                      return (
                        <TableCell
                          key={header.id}
                          sx={{ paddingLeft: "1.5rem" }}
                        >
                          {header.title}
                        </TableCell>
                      );
                    }
                    return null;
                  })}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
              >
                {documentList.length ? (
                  documentList?.map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* actions */}
                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "#f4f4f4",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            minWidth: "6rem",
                            maxHeight: "5vh",
                          }}
                        >
                          {row.url ? (
                            <a
                              href={row.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <VisibilityIcon
                                sx={{
                                  color: "#009999",
                                  cursor: "pointer",
                                  width: "1.7rem",
                                  height: "1.75rem",
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
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell align="center" scope="row">
                      <Typography textAlign="center">
                        No content here
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }

  const displayModal = (message: string) => {
    setOpenModal(true);
    setModalMessage(message);
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
                    <TableCell align="center">
                      <>
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
