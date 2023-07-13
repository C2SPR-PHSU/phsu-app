import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box, Grid, Modal, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ClearIcon from '@mui/icons-material/Clear';
import useAuthStore from "@/hooks/useAuthStore";
import { IRequiredDocumentsProps, IUserDocumentsData } from '../../types';
import { getUserDocuments } from '../functions'
import { modalStyle } from './constants';
import styles from './styles.module.scss';
import RequiredDocumentsTable from '../RequiredDocumentsTable';

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
                <RequiredDocumentsTable documentList={documentList} />
              </TabPanel>
              <TabPanel value="2">
                <RequiredDocumentsTable documentList={documentList} />
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