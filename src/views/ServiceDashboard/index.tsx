import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ItemStatus from "@/components/ItemStatus";
import { Sidebar } from "@/layout";
import ApiRequest from "@/utils/services/apiService";
import { CredentialingCertificate } from "@/utils";

// Api Response
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

// send campus user
const request = {
  campus_id: "1",
};

const Dashboard: React.FC = () => {
  useEffect(() => {
    const api = new ApiRequest();
    api.resource = CredentialingCertificate;
    try {
      const response = api.post({
        body: request,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
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

export default Dashboard;
