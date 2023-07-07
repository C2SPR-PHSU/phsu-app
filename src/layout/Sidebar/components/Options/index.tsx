import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  text,
  redirect,
  children,
}: {
  text: string;
  redirect?: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();

const Sidebar = ({ text, children }: { text: string; children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {children}
      <Typography variant="body1" sx={{ color: "white", textAlign: "center" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Options;
