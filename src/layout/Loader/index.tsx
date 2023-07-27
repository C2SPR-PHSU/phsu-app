import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import React from "react"; // Importamos React desde "react" para que la sintaxis funcione

type CustomizedProgressBarsProps = {
  center: boolean;
};

// Inspired by the former Facebook spinners.
function FacebookCircularProgress() {
  return (
    <Box
      sx={{ position: "relative", backgroundColor: "rgba(255, 255, 255, 0)" }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={50}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#f7941d" : "#e1963a",
          animationDuration: "650ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={50}
        thickness={4}
      />
    </Box>
  );
}

const CustomizedProgressBars: React.FC<CustomizedProgressBarsProps> = ({
  center,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0)",

        ...(center && {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }),
      }}
    >
      <FacebookCircularProgress />
    </Box>
  );
};

export default CustomizedProgressBars; // Quitamos el "const" antes de "CustomizedProgressBars"
