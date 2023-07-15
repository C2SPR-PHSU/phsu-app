import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import useAuthStore from "@/hooks/useAuthStore";
import CustomizedProgressBars from "@/layout/Loader";
import StatusButton from "@/components/StatusButton";
import { getUserServices } from "../../functions";
import { IUserServicesData } from "../../types";
import { set } from "lodash";

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

  const [loader, setLoader] = useState(false);

  const getUserServicesRows = async () => {
    try {
      const response = await getUserServices("1", token);
      setUserServices([response].flat());
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoader(true);
    getUserServicesRows();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontFamily: "GothamMedium !important",
                fontWeight: "bolder !important",
                fontSize: "1.5rem",
              }}
            >
              Service
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: "GothamMedium !important",
                fontWeight: "bolder !important",
                fontSize: "1.5rem",
              }}
            >
              Time
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: "GothamMedium !important",
                fontWeight: "bolder !important",
                fontSize: "1.5rem",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: "GothamMedium !important",
                fontWeight: "bolder !important",
                fontSize: "1.5rem",
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userServices &&
            userServices?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontFamily: "GothamMedium !important",
                    fontWeight: "bolder !important",
                    fontSize: "1.2rem",
                  }}
                >
                  {row.service} - {row.campus_name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "GothamMedium !important",
                    fontWeight: "bolder !important",
                    fontSize: "1.2rem",
                  }}
                >
                  {row.created}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "GothamMedium !important",
                    fontWeight: "bolder !important",
                    fontSize: "1.2rem",
                    padding: "1.2rem !important",
                  }}
                >
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "GothamMedium !important",
                    fontWeight: "bolder !important",
                    fontSize: "1.2rem",
                  }}
                >
                  <VisibilityIcon
                    sx={{ color: "#009999", cursor: "pointer" }}
                    onClick={() => {
                      handleModal(`${row.service} - ${row.campus_name}`);
                      setDocumentId(row.campus_id);
                    }}
                  />
                  <DownloadIcon sx={{ color: "rgba(0, 168, 168, 0.42)" }} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <Box
          sx={{
            display: "none",
            ...(loader && {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }),
          }}
        >
          <CustomizedProgressBars />
        </Box>
      </Table>
    </TableContainer>
  );
}
