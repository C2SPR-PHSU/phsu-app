import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Options = ({
  text,
  redirect,
  children,
  textColor,
  fontSze,
}: {
  text: string;
  redirect?: string;
  children: ReactNode;
  textColor: string;
  fontSze: string;
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
        sx={{ color: textColor, textAlign: "center", fontSize: fontSze }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Options;
