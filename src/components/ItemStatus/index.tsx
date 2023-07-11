import React from "react";
import { Box, Typography } from "@mui/material";
import Credentialing from "@/layout/CredentialingCertification";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import UploadIcon from "@mui/icons-material/Upload";

interface ItemStatusProps {
  title: string;
  date: string;
  texButton: string;
  state: boolean;
}

const ItemStatus: React.FC<ItemStatusProps> = ({
  title,
  date,
  texButton,
  state,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "2px solid #e6e6e6",
        display: "flex",
        flexDirection: "row",
        height: "3rem",
        justifyContent: "space-around",
        paddingTop: "1.5rem",
        paddingBottom: "4rem",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>{date}</Typography>
      <Credentialing buttonText={texButton} state={state} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "9%",
        }}
      >
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
          <UploadIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ItemStatus;
