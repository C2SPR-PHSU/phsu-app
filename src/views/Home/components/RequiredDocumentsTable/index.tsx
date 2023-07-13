import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box, Grid, Modal, Typography } from '@mui/material';
import { tableHeaders } from './constants';
import StatusButton from "@/components/StatusButton";
import { IRequiredDocumentsProps, IUserDocumentsData } from '../../types';
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';

interface RequiredDocumentsTableProps {
  documentList: IUserDocumentsData[];
}

const RequiredDocumentsTable = ({ documentList }: RequiredDocumentsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              tableHeaders.map(header => {
                return (
                  <TableCell
                    align="center"
                    key={header.id}
                  >
                    {header.title}
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
        {
          documentList.length ? 
          documentList.map((row, index) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"  >
                  {row.description}
                </TableCell>
                <TableCell align="center" >{row.created}</TableCell>
                <TableCell align="center">
                  <StatusButton statusName={row.status_desc as string} />
                </TableCell>
                <TableCell align="center" >
                  <DownloadIcon sx={{ color: "rgba(0, 168, 168, 0.42)" }} />
                  <DeleteIcon sx={{ color: "#009999", cursor: 'pointer' }} />
                  <VisibilityIcon sx={{ color: "#009999", cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            )
          }) : 
          <TableRow>
            <TableCell align="center" scope="row">
              <Typography textAlign='center'>No content here</Typography>
            </TableCell>
          </TableRow>
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RequiredDocumentsTable;