import { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import StatusButton from "@/components/StatusButton";
import { IUserServicesData } from "../../types";
import styles from "./styles.module.scss";
import { formatDate } from "@/utils";

interface IBasicTableProps {
  handleModal: (prop: string) => void;
  setDocumentId: (prop: string) => void;

  userServices: IUserServicesData[];
}

const BasicTableMobile: React.FC<IBasicTableProps> = ({
  handleModal,
  setDocumentId,

  userServices,
}) => {
  const refArray = useRef<(HTMLDivElement | null)[]>([]);

  // TableRow
  const rowRefArray = useRef<(HTMLTableRowElement | null)[]>([]);

  const [heights, setHeights] = useState<number[]>([]);
  const [rowheights, setRowHeights] = useState<number[]>([]);

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
  }, [userServices]);

  return (
    <TableContainer
      component={Paper}
      sx={{ padding: "1rem", display: "flex", flexDirection: "row" }}
    >
      <TableContainer sx={{ width: "100vh" }}>
        <Table
          sx={{ width: "100%", justifyContent: "space-around" }}
          aria-label="simple table"
        >
          {/* TableHead should contain a single TableRow */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                <span
                  className={styles["typography"]}
                  style={{ fontSize: "1.1rem", paddingBottom: "0.05rem" }}
                >
                  Service
                </span>
              </TableCell>
              <TableCell sx={{ paddingLeft: "8%" }}>
                <span
                  className={styles["typography"]}
                  style={{ fontSize: "1rem" }}
                >
                  Time
                </span>
              </TableCell>
              <TableCell>
                <Typography
                  className={styles["typography"]}
                  style={{
                    fontSize: "1rem",
                    minWidth: "7rem",
                    paddingLeft: "2rem",
                  }}
                >
                  Days Left
                </Typography>
              </TableCell>
              <TableCell sx={{ paddingLeft: "4%" }}>
                <span
                  className={styles["typography"]}
                  style={{ fontSize: "1rem" }}
                >
                  Status
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userServices.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                ref={(e) => (rowRefArray.current[index] = e)}
              >
                <TableCell component="th" scope="row">
                  <span className={styles["typography"]}>
                    <Box
                      ref={(el: HTMLDivElement) =>
                        (refArray.current[index] = el)
                      }
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflowY: "auto",
                        minHeight: "4.5rem",
                        maxHeight: "4.5rem",
                        minWidth: "16rem",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                          width: "0.4em",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {row.service} - {row.campus_name}
                    </Box>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className={styles["typography"]}>
                    {formatDate(row.created)}
                  </span>
                </TableCell>
                <TableCell align="center">
                  <Typography className={styles["typography"]}>
                    {row.days_to_expire}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ paddingTop: "1.5rem" }}>
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* table 2 */}
      <TableContainer>
        <Table aria-label="simple table">
          {/* TableHead should contain a single TableRow */}
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <span
                  className={styles["typography"]}
                  style={{ fontSize: "1rem" }}
                >
                  Action
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userServices.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  minHeight: `${rowheights[index]}px`,
                  maxHeight: `${rowheights[index]}px`,
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: `${heights[index]}px`,
                      maxHeight: `${heights[index]}px`,
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        handleModal(`${row.service} - ${row.campus_name}`);
                        setDocumentId(row.campus_id);
                      }}
                    >
                      <VisibilityIcon
                        sx={{ color: "#009999", cursor: "pointer" }}
                      />
                    </IconButton>

                    <IconButton>
                      <DownloadIcon sx={{ color: "rgba(0, 168, 168, 0.42)" }} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainer>
  );
};

export default BasicTableMobile;
