import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";

function createData(
  service: string,
  time: string,
  status: string,
  action: string
) {
  return { service, time, status, action };
}

const rows = [
  createData("Credential Certification", "03/06/2023", "In-Review", ""),
  createData(
    "Admissions Compliance Certification",
    "0/27/2022",
    "In-Review",
    ""
  ),
  createData("Credit Transcript", "08/27/2022", "In-Review", ""),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.service}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.service}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  sx={{ color: "#333333", borderColor: "#333333" }}
                >
                  {row.status}
                </Button>
              </TableCell>
              <TableCell align="center">
                <VisibilityIcon sx={{ color: "#009999" }} />
                <DownloadIcon sx={{ color: "rgba(0, 168, 168, 0.42)" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
