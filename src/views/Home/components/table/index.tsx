import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import useAuthStore from "@/hooks/useAuthStore";
import StatusButton from "@/components/StatusButton";
import { getUserServices } from "../../functions";
import { IUserServicesData } from "../../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./styles.module.scss";

interface IBasicTableProps {
  handleModal: (prop: string) => void;
  setDocumentId: (prop: string) => void;
}

export default function BasicTable({
  handleModal,
  setDocumentId,
}: IBasicTableProps) {
  const token = useAuthStore((state: any) => state.token);

  const [userServices, setUserServices] = useState<IUserServicesData[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      console.log(error);
    }
  };

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

  useEffect(() => {
    getUserServicesRows();
  });

  if (isMobile) {
    return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                    paddingLeft: "0rem",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    className={styles["typography"]}
                    sx={{
                      fontSize: "0.9rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    Service
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    paddingLeft: "3%",
                  }}
                >
                  <Typography
                    className={styles["typography"]}
                    sx={{
                      fontSize: "0.9rem",
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
                      fontSize: "0.9rem",
                    }}
                  >
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userServices &&
                userServices?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography
                        className={styles["typography"]}
                        sx={{
                          display: "flex",
                          fontSize: "0.9rem",
                        }}
                      >
                        {row.service}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        className={styles["typography"]}
                        sx={{ fontSize: "0.9rem" }}
                      >
                        {formatDate(row.created)}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        paddingTop: "1rem",
                      }}
                    >
                      <StatusButton statusName={row.status_desc as string} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          sx={{
            width: 130,
            paddingTop: "1rem",
          }}
        >
          <Table
            sx={{
              justifyContent: "space-around",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    ...(isMobile && {
                      fontSize: "1rem",
                    }),
                  }}
                >
                  <Typography
                    className={styles["typography"]}
                    sx={{
                      fontSize: "1rem",
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
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      sx={{
                        paddingTop: "1.299rem",
                        paddingRight: "3%",
                        paddingLeft: "3%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          minWidth: "5rem",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            handleModal(`${row.service} - ${row.campus_name}`);
                            setDocumentId(row.campus_id);
                          }}
                          sx={{
                            backgroundColor: "#009999",
                            width: "1.7rem",
                            height: "1.7rem",
                            marginRight: "1rem",
                          }}
                        >
                          <VisibilityIcon
                            sx={{
                              color: "white",
                            }}
                          />
                        </IconButton>

                        <IconButton
                          sx={{
                            width: "1.8rem",
                            height: "1.8rem",
                            backgroundColor: "rgba(0, 168, 168, 0.42)",
                          }}
                        >
                          <DownloadIcon
                            sx={{
                              color: "white",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
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
                }}
              >
                Status
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{}}>
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
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography
                    className={styles["typography"]}
                    sx={{
                      display: "flex",
                    }}
                  >
                    {row.service}
                  </Typography>

                  <Typography
                    className={styles["typography"]}
                    sx={{
                      display: "none",
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
                  >
                    <VisibilityIcon
                      sx={{
                        color: "#009999",
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>

                  <IconButton>
                    <DownloadIcon
                      sx={{
                        color: "rgba(0, 168, 168, 0.42)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
