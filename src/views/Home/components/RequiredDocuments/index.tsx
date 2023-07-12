import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Modal } from "@mui/material";
import { tableHeaders, modalStyle } from './constants';

const RequiredDocuments = ({ open, handleClose }: {open: boolean, handleClose: () => void }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  tableHeaders.map(header => {
                    return (
                      <TableCell
                        align="center"
                        sx={{
                          fontFamily: 'GothamMedium !important',
                          fontWeight: 'bolder !important',
                          fontSize: '1.5rem'
                        }}
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
      </Box>
    </Modal>
  );
}

export default RequiredDocuments