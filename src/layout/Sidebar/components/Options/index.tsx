import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type OptionsProps = {
  children: ReactNode;
  text: string;
  path: string;
  onClick: (path: string) => void;
};

const Options: React.FC<OptionsProps> = ({ children, text, path, onClick }) => {
  const handleOptionClick = () => {
    onClick(path);
  };

  return (
    <div onClick={handleOptionClick}>
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
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          {text}
        </Typography>
      </Box>
    </div>
  );
};

export default Options;
