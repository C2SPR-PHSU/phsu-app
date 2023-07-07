import { ChangeEvent, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { uploadDocument } from '@/views/RequestServices/functions';
import useAuthStore from "@/hooks/useAuthStore";

interface IDocumentsProps {
  title: string;
  campusId: number;
  documentId: number;
}

const Documents = ({ title, campusId, documentId }: IDocumentsProps) => {
  const token = useAuthStore((state) => state.token);
  const [checked, setChecked] = useState(false)

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const document = e.target.files[0];
    try {
      await uploadDocument({ campusId, documentId, document, token })
      setChecked(true)
    } catch (error) {
      setChecked(false)
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box>
              <Button
                component="label"
                startIcon={<UploadIcon sx={{color: "#009999", cursor: 'pointer'}}/>}
              >
                <input type="file" accept=".pdf" onChange={(e) => handleUpload(e)} hidden/>
              </Button>
            <DeleteIcon sx={{color: "rgba(0, 168, 168, 0.42)"}} />
            <VisibilityIcon sx={{color: "rgba(0, 168, 168, 0.42)"}} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          { checked ? <CheckIcon sx={{ color: '#f7941d' }} /> : <CloseIcon sx={{ color: 'red' }} />}
        </Grid>
      </Grid>
    </>
  );
};

export default Documents;
