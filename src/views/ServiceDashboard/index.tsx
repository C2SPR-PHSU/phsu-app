import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ItemStatus from "@/components/ItemStatus";
// import ApiRequest from "@/utils/services/apiService";
// import { CredentialingCertificate } from "@/utils";
import axios from "axios";

// token : 5f68fde113aa5adf3f0f9bf4fd196389ad241592dbdc25b85b13e052b9043f7b5878cbbf40b725b114364d415c2c9fbc6dcaf6920c8671281e4045fed663b063

// Api Response

const Dashboard: React.FC = () => {
  useEffect(() => {
    handleClick();
  });

  const handleClick = async () => {
    const url = "http://apiphsu.lobsys.net:8080/user/service"; // Reemplaza con tu URL

    const request = {
      campus_id: "1",
    };

    const token =
      "5f68fde113aa5adf3f0f9bf4fd196389ad241592dbdc25b85b13e052b9043f7b5878cbbf40b725b114364d415c2c9fbc6dcaf6920c8671281e4045fed663b063"; // Reemplaza con tu token de autenticación

    try {
      const response = await axios.post(url, request, {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      });
      const responseData = response.data;
      const responseObject = responseData.data.map((item: any) => ({
        service: item.service,
        campus_id: item.campus_id,
        campus_name: item.campus_name,
        status: item.status,
        created: item.created,
        status_desc: item.status_desc,
      }));
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

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
