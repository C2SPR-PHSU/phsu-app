import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ItemStatus from "@/components/ItemStatus";
import { Sidebar } from "@/layout";

interface ResponseData {
  code: number;
  message: string;
  data: CredentialingCertificationData;
}

interface CredentialingCertificationData {
  "Credentialing Certification": CredentialingCertification[];
}

interface CredentialingCertification {
  campus_id: string;
  status: string;
  created: string;
  statusDesc: string;
}

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box className={styles["welcome-container"]}>
          <Box className={styles["background-image"]}>
            <Typography className={styles["text"]}>
              Services dashboard
            </Typography>
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
                <Typography className={styles["sub-title"]}>Service</Typography>
                <Typography className={styles["sub-title"]}>Time</Typography>
                <Typography className={styles["sub-title"]}>Status</Typography>
                <Typography className={styles["sub-title"]}>Action</Typography>
              </Box>
              <ItemStatus
                title="Credentialing Certification"
                date="03/06/2023"
                texButton="In-Review"
                state={true}
              />
              <ItemStatus
                title="Credentialing Certification"
                date="03/06/2023"
                texButton="Aproved"
                state={false}
              />
              <ItemStatus
                title="Credentialing Certification"
                date="03/06/2023"
                texButton="Approved"
                state={false}
              />
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
    </Box>
  );
};

export default App;
