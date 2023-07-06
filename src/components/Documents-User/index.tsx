import { Box } from "@mui/material";
import CustomLabel from "@/components/CustomLabel";
import UploadIcon from "@mui/icons-material/Upload";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";

interface UploadDocuments {
  text: string;
  important: boolean;
  upload: boolean;
  trash: boolean;
  visibility: boolean;
}

const Documents: React.FC<UploadDocuments> = ({
  text,
  important,
  upload,
  trash,
  visibility,
}) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <Box
          sx={{
            display: "Flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            borderBottom: "3px solid #ebeaea",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CustomLabel name={text} required={important} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
              gap: "1rem",
            }}
          >
            <IconButton
              sx={{
                minWidth: "1.3rem",
                minHeight: "1.3rem",
                maxHeight: "2.3rem",
                maxWidth: "2.3rem",
                backgroundColor: "#009999",
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
                cursor: "default",
                minWidth: "2.3rem",
                minHeight: "2.3rem",
                maxHeight: "2.3rem",
                maxWidth: "2.3rem",

                opacity: "50%",
                "&:hover": {
                  backgroundColor: "#009999",
                },
                ...(trash && {
                  opacity: "100%",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#009999",
                  },
                }),
              }}
            >
              <DeleteIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#009999",
                opacity: "50%",
                cursor: "default",
                minWidth: "2.3rem",
                minHeight: "2.3rem",
                maxHeight: "2.3rem",
                maxWidth: "2.3rem",
                "&:hover": {
                  backgroundColor: "#009999",
                },
                ...(visibility && {
                  opacity: "100%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#009999",
                  },
                }),
              }}
            >
              <VisibilityIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ paddingTop: "0.7rem" }}>
          <CheckIcon sx={{ color: "#f7941d" }} />
        </Box>
      </Box>
    </>
  );
};

export default Documents;
