import { Box, Typography, Button, IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface DocumentsInModalProps {
  title: string;
  date: string;
  status: string;
  textInRed: string;
}

const DocumentsInModal: React.FC<DocumentsInModalProps> = ({
  title,
  date,
  status,
  textInRed,
}) => {
  return (
    <Box sx={{ paddingTop: "0.2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#eeeeee",
          borderRadius: "6px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>{title}</Typography>

          <Typography sx={{ color: "red" }}>{textInRed}</Typography>
        </Box>
        <Typography>{date}</Typography>
        <Button variant="outlined">{status}</Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "16%",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#009999",
              minWidth: "2rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              maxWidth: "2rem",
              opacity: "50%",
              "&:hover": {
                backgroundColor: "#009999",
              },
            }}
          >
            <UploadIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#009999",
              minWidth: "2rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              maxWidth: "2rem",
              opacity: "50%",
              "&:hover": {
                backgroundColor: "#009999",
              },
            }}
          >
            <DeleteIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#009999",
              minWidth: "2rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              maxWidth: "2rem",
              opacity: "100%",
              "&:hover": {
                backgroundColor: "#009999",
              },
            }}
          >
            <VisibilityIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentsInModal;
