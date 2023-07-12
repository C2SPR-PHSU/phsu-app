import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, Modal } from "@mui/material";
import { tableHeaders, modalStyle } from './constants';

const RequiredDocuments = ({ title, open, handleClose }: {title: string, open: boolean, handleClose: () => void }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Grid container>
          <Grid item xs={12}>{title}</Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {
                      tableHeaders.map(header => {
                        return (
                          <TableCell
                            align="center"
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
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default RequiredDocuments