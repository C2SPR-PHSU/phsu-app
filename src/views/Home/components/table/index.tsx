import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import useAuthStore from "@/hooks/useAuthStore";
import StatusButton from "@/components/StatusButton";
import { getUserServices } from "../../functions";
import { IUserServicesData } from "../../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./styles.module.scss";
import BasicTableMobile from "./tableMobile";
import { formatDate } from "@/utils";

interface IBasicTableProps {
  handleModal: (prop: string) => void;
  setDocumentId: (prop: string) => void;
}

export default function BasicTable({
  handleModal,
  setDocumentId,
}: IBasicTableProps) {
  const token = useAuthStore((state: any) => state.token);
  const logout = useAuthStore((state: any) => state.setLogout);

  const [userServices, setUserServices] = useState<IUserServicesData[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const statusDictionary: { [key: number]: string } = {
    0: "To Upload",
    1: "Uploaded",
    2: "Sent",
    3: "Received",
    4: "Pending",
    5: "Request for Additional Info",
    6: "Approved",
    7: "Denied",
  };

  const getUserServicesRows = async () => {
    try {
      const response = await getUserServices("1", token);
      setUserServices([response].flat());
    } catch (error) {
      if (error?.status === 404) {
        logout();
      }
    }
  };

  useEffect(() => {
    getUserServicesRows();
  }, []);

  if (isMobile) {
    return (
      <BasicTableMobile
        handleModal={(prop) => handleModal(prop)}
        setDocumentId={(prop) => setDocumentId(prop)}
        userServices={userServices}
      />
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        padding: "1rem",
        
      }}
    >
      <Table
        sx={{
          width: "100%",
          justifyContent: "space-around",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                justifyContent: "center",
                
              }}
            >
              <Typography
                className={styles["typography"]}
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Service
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                paddingLeft: "8%",
              }}
            >
              <Typography
                className={styles["typography"]}
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Time
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                paddingLeft: "4%",
              }}
            >
              <Typography
                className={styles["typography"]}
                sx={{
                  fontSize: "1.2rem",
                  minWidth: "6rem",
                }}
              >
                Days Left
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                paddingLeft: "4%",
              }}
            >
              <Typography
                className={styles["typography"]}
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                className={styles["typography"]}
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userServices &&
            userServices?.map((row, index) => (
              <TableRow
                key={index}
               
              >
                <TableCell component="th" scope="row">
                  <Typography
                    className={styles["typography"]}
                    sx={{
                      display: "flex",
                      maxHeight: "3rem",
                      minWidth: "15rem",
                    }}
                  >
                    {row.service} - {row.campus_name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={styles["typography"]}>
                    {formatDate(row.created)}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={styles["typography"]}>
                    {row.days_to_expire}
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    paddingTop: "1.5rem",
                  }}
                >
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>
                <TableCell
                  sx={{
                    paddingTop: "1.5rem",
                    justifyContent: "space-around",
                    display: "flex",
                    paddingLeft: "30%",
                    paddingRight: "30%",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      handleModal(`${row.service} - ${row.campus_name}`);
                      setDocumentId(row.campus_id);
                    }}
                  > <div className={styles["rounded-div"]}>
                  <VisibilityIcon
                    sx={{
                      fontSize: "24px !important",
                      color: "#e0e0e0"
                    }}
                  />
                </div>
                  </IconButton>

                  <IconButton >
                    <div className={styles["rounded-div-disabled"]}>
                    <DownloadIcon
                      sx={{
                        color:'white'
                      }}
                    />
                    </div>
                   
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
