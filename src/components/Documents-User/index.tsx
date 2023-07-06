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
}

const Documents: React.FC<UploadDocuments> = ({ text, important, upload }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <Box
          sx={{
            display: "Flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            borderBottom: "1px solid gray",
          }}
        >
          <CustomLabel name={text} required={important} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
              gap: "1rem",
            }}
          >
            <IconButton sx={{ backgroundColor: "#009999" }}>
              <UploadIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#009999" }}>
              <DeleteIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#009999" }}>
              <VisibilityIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <IconButton
            sx={{ display: "none", ...(upload && { display: "flex" }) }}
          >
            <CheckIcon sx={{ color: "#f7941d" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Documents;
