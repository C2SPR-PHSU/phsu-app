import React from "react";
import Box from "@mui/material/Box";
import styles from "./loader.module.scss";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
        width: "100%",
      }}
    >
      <Box className={styles.loader}></Box>
    </Box>
  );
};

export default Loader;
