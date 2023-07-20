import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  text,
  redirect,
  children,
  textColor,
}: {
  text: string;
  redirect?: string;
  children: ReactNode;
  textColor: string;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`${redirect ?? "/"}`)}
    >
      {children}
      <Typography
        variant="body1"
        sx={{ color: textColor, textAlign: "center" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Sidebar;
