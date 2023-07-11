import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

interface CredentialingProps {
  buttonText: string;
  state: boolean;
}

const Credentialing: React.FC<CredentialingProps> = ({ buttonText, state }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          color: "green",
          borderColor: "green",
          padding: "1rem",
          ...(state && {
            color: "gray",
            borderColor: "gray",
          }),
        }}
      >
        {buttonText}
      </Button>
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
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Credentialing;
