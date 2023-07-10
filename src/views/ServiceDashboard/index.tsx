import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Credentialing from "@/layout/CredentialingCertification";
import styles from "./styles.module.scss";
import ItemStatus from "@/components/ItemStatus";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box className={styles["welcome-container"]}>
        <Box className={styles["background-image"]}>
          <Typography className={styles["text"]}>Services dashboard</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "3rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <Typography
            sx={{
              color: "#f7941d",
              fontWeight: "bold",
              fontSize: "30px",
              paddingBottom: "1rem",
            }}
          >
            Requested Services
          </Typography>

          <Typography sx={{ paddingBottom: "1rem" }}>
            Review your service request status and any pending actions.
          </Typography>
          <Box
            sx={{
              width: "95%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography>Service</Typography>

              <Typography>Time</Typography>
              <Typography>Status</Typography>
              <Typography>Action</Typography>
            </Box>
            <ItemStatus title="Credentialing Certification" date="03/06/2023" />
            <ItemStatus title="Credentialing Certification" date="03/06/2023" />
            <ItemStatus title="Credentialing Certification" date="03/06/2023" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "65vh",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default App;
