import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box, Grid, Modal, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';
import useAuthStore from "@/hooks/useAuthStore";
import StatusButton from "@/components/StatusButton";
import { IRequiredDocumentsProps, IUserDocumentsData } from '../../types';
import { getUserDocuments } from '../functions'
import { tableHeaders, modalStyle } from './constants';
import styles from './styles.module.scss';

const RequiredDocuments = ({ title, open, campusId, handleClose }: IRequiredDocumentsProps) => {

  const [value, setValue] = useState('1');
  const [documentList, setDocumentList] = useState<IUserDocumentsData[]>([]);
  const token = useAuthStore((state: any) => state.token);

  useEffect(() => {
    return () => {
      setValue('1')
    }
  }, [])

  useEffect(() => {
    requestUserDocument();
  }, [campusId, value])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const requestUserDocument = async () => {
    try {
      const response = await getUserDocuments(campusId, token, parseInt(value, 10));
      setDocumentList(response)
    } catch (error) { console.log(error) }
  }

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
              <Grid item xs={8}>
                <Typography variant="h6" className={styles["subtitle"]}>{title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" textColor='primary' indicatorColor='primary' centered>
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
                                {header.title}
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {documentList && documentList.map((row, index) => (
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
                      ))}
                    </TableBody>
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
                                {header.title}
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" scope="row">
                          <Typography textAlign='center'>No content here</Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </Grid>
          </TabContext>
        </Grid>
        <ClearIcon
          sx={{ position: 'absolute', top: '5%', right: '2%', color: 'gray', cursor: 'pointer' }}
          onClick={handleClose}
        />
      </Box>
    </Modal>
  );
}

export default RequiredDocuments;