import { useState, useEffect } from "react";
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
import useAuthStore from "@/hooks/useAuthStore";
import axios from 'axios';
import StatusButton from "@/components/StatusButton";

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
  const token = useAuthStore((state) => state.token);

  const [data, setData] = useState(null);

  const getUserDocuments = () => {
    console.log('test')
    const url = "http://apiphsu.lobsys.net:8080/user/document";
    const formData = new FormData();
    formData.append('campus_id', '2');

    const headers = {
      'Content-Type': 'multipart/form-data',
      'token': token
    };

    axios.post(url, formData, { headers })
      .then(response => {
        // handle success, set the row state to the response data
        setData(response.data.data);
        // console.log(response.data.data)
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  const statusDictionary: { [key: number]: string } = {
    0: "To Upload",
    1: "Uploaded",
    2: "Sent",
    3: "Received",
    4: "Pending",
    5: "Request for Additional Info",
    6: "Approved",
    7: "Denied"
  };


  useEffect(() => {
    console.log(data)
    getUserDocuments()
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.5rem' }}>Service</TableCell>
            <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.5rem' }}>Time</TableCell>
            <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.5rem' }}>Status</TableCell>
            <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.5rem' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            parseInt(row.status) !== 0 &&
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.2rem' }}  >
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.2rem' }} >{row.created}</TableCell>
              <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.2rem', padding: '1.2rem !important' }} >

                <StatusButton statusName={statusDictionary[row.status] as string} />
              </TableCell>
              <TableCell align="center" sx={{ fontFamily: 'GothamMedium !important', fontWeight: 'bolder !important', fontSize: '1.2rem' }} >
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
