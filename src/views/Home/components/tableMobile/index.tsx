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
  }, []);

  return (
    <>
      {userServices &&
        userServices?.map((row, index) => (

          <Box
            key={index}
            sx={{
              display: "flex",
              marginBottom: "2rem !important",
              padding: "1.5rem",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Grid container>

              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography>
                  Service
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

              <Grid container item xs={12} sx={{ marginY: '1rem !important' }}>
                <StatusButton statusName={row.status_desc as string} />
              </Grid>


              <Grid container item xs={12} justifyContent={'space-between'}>
                <Grid item>
                  <Typography>
                    {formatDate(row.created)}
                  </Typography>
                </Grid>
                <Grid item>
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
                </Grid>
                <Grid item>
                  <Typography>
                    {row.days_to_expire} Days Left
                  </Typography>
                </Grid>
              </Grid>

            </Grid>

          </Box >
        ))}
    </>
  );
};

export default BasicTableMobile;
