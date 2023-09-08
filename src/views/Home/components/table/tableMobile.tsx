import { useState, useLayoutEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import StatusButton from "@/components/StatusButton";
import { IUserServicesData } from "../../types";
import styles from "./stylesTableMobile.module.scss";
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

  const [heights, setHeights] = useState<number[]>([]);

  // Calculate and set heights on document list change
  useLayoutEffect(() => {
    const newHeights: number[] = [];

    refArray.current.forEach((ref) => {
      if (ref) {
        const { height } = ref.getBoundingClientRect();
        newHeights.push(height);
      }
    });

    setHeights(newHeights);
  }, [userServices]);

  const TitleTableHeadName: string[] = [
    "Service",
    "Time",
    "Days Left",
    "Status",
  ];

  return (
    <TableContainer sx={{ display: "flex" }}>
      {userServices.length ? (
        <Table
          sx={{ width: "100%", justifyContent: "space-around" }}
          aria-label="simple table"
        >
          {/* TableHead should contain a single TableRow */}
          <TableHead>
            <TableRow>
              {TitleTableHeadName.map(
                (header, index) =>
                  header !== "Action" && (
                    <TableCell
                      key={index}
                      sx={{
                        border: "0px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          minWidth: "6rem",
                        }}
                      >
                        {header}
                      </Typography>
                    </TableCell>
                  )
              )}

              <TableCell
                sx={{
                  paddingLeft: "4%",
                  minWidth: "7rem",
                  minHeight: "10%",
                }}
                align="center"
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "white",
                  border: "0px",
                  boxShadow: "-1px 0 0 rgba(221, 221, 221, 0.8)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>Action</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userServices.map((row, index) => (
              <TableRow key={index}>
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
                        minWidth: "11rem",
                      }}
                    >
                      {row.service} {row.campus_name}
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

                <TableCell
                  style={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: "white",
                    border: "0px",
                    display: "flex",
                    borderBottom: "1px solid rgba(221, 221, 221, 0.6)",
                    borderLeft: "1px solid #ddd",
                    paddingTop: "1.14rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      minHeight: `${heights[index] + 1}px`,
                      maxHeight: `${heights[index] + 1}px`,
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        handleModal(`${row.service} - ${row.campus_name}`);
                        setDocumentId(row.campus_id);
                      }}
                    >
                      <VisibilityIcon
                        sx={{
                          color: "#009999",
                          cursor: "pointer",
                        }}
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
      ) : (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography textAlign="center">There is no content here</Typography>
        </Box>
      )}
    </TableContainer>
  );
};

export default BasicTableMobile;
