import React from "react";
import { Box, Button, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import UploadIcon from "@mui/icons-material/Upload";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #7b7b7b",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

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

      <Button
        sx={{
          color: "gray",
          borderColor: "gray",
          padding: "1rem",
          cursor: "default",
        }}
        variant="outlined"
      >
        {texButton}
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "9%",
        }}
      >
        <IconButton
          onClick={handleOpen}
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

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                component="h2"
                sx={{
                  color: "#f7941d",
                  fontWeight: "bold",
                  fontSize: "23px",
                  paddingBottom: "1rem",
                }}
              >
                Credentialing Certification
              </Typography>

              <Box>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Box>
          </Modal>
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
