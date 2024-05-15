import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import useAuthStore from "@/hooks/useAuthStore";
import StatusButton from "@/components/StatusButton";
import { getUserServices } from "../../functions";
import { IUserServicesData } from "../../types";
import styles from "./styles.module.scss";

interface IBasicTableProps {
  isMobile: boolean;
  handleModal: (prop: string) => void;
  setDocumentId: (prop: string) => void;
  setCampusId: (prop: string) => void;
}

const BasicTableMobile: React.FC<IBasicTableProps> = ({
  isMobile,
  handleModal,
  setDocumentId,
  setCampusId,
}) => {
  const token = useAuthStore((state: any) => state.token);
  const logout = useAuthStore((state: any) => state.setLogout);

  const [userServices, setUserServices] = useState<IUserServicesData[]>([]);

  const getUserServicesRows = async () => {
    try {
      const response = await getUserServices("1", token);
      setUserServices([response].flat());
    } catch (error) {
      if (error?.status === 404) logout()
    }
  };

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  useEffect(() => {
    getUserServicesRows();
  });

  return (
    <>
      {userServices &&
        userServices?.map((row, index) => (

          <Box sx={{
            display: 'flex',
            marginBottom: '2rem !important',
            paddingX: '2rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <Grid container>

              <Grid item xs={12}>
                <Typography>
                  Service:
                </Typography>
                <Typography
                  onClick={() => {
                    handleModal(`${row.service} - ${row.campus_name}`);
                    setCampusId(row.campus_id);
                    setDocumentId(row.id);
                  }}
                  sx={{
                    cursor: 'pointer',
                    display: "flex",
                  }}
                >
                  {row.service} - {row.campus_name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Date:
                </Typography>
                <Typography>
                  {formatDate(row.created)}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Days Left:
                </Typography>
                <Typography>
                  {row.days_to_expire}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  Status:
                </Typography>
                <Typography>
                  <StatusButton statusName={row.status_desc as string} />
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Action:
                </Typography>

                <IconButton
                  onClick={() => {
                    handleModal(`${row.service} - ${row.campus_name}`);
                    setCampusId(row.campus_id);
                    setDocumentId(row.id);
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
              </Grid>

            </Grid>

          </Box >
        ))}
    </>
  );
};

export default BasicTableMobile;
