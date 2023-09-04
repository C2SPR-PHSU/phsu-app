import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation} from "react-router-dom";

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
  const location = useLocation();

  const isActive = location.pathname === redirect;

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
        sx={{ color: textColor, textAlign: "center", width:'7rem' }}
      >
        {text}
      </Typography>

      {isActive && (
       <hr style={
        {
          borderTopColor:'white',
          width:'5rem'
        }
      }/>
   )}
    </Box>
  );
};

export default Sidebar;
