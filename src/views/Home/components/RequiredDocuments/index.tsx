import { useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Grid, Modal, Typography } from "@mui/material";
import { tableHeaders, modalStyle } from './constants';

const RequiredDocuments = ({ title, open, handleClose }: {title: string, open: boolean, handleClose: () => void }) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Grid container>
          <TabContext value={value}>
            <Grid container>
              <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center'}}><Typography>{title}</Typography></Grid>
              <Grid item xs={4}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Sent" value="1" />
                    <Tab label="Received" value="2" />
                  </TabList>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TabPanel value="1">
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
                                { header.title }
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value="2">
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
                                { header.title }
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </TabPanel>
            </Grid>
          </TabContext>
        </Grid>
      </Box>
    </Modal>
  );
}

export default RequiredDocuments