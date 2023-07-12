import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        width: "100%",
      }}
    >
      <CircularProgress
        sx={{ color: "#f7941d", width: "500px", height: "500px" }}
      />
    </Box>
  );
}
