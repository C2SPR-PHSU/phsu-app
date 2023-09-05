import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation} from "react-router-dom";
import { useMediaQueries } from "@/views/Profile/components/BMediaQuerys";

const Sidebar = ({
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
  fontSze:string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === redirect;
  const { isScreenLg } = useMediaQueries();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        justifyContent:'center',
        alignItems:'center'
      }}
      onClick={() => navigate(`${redirect ?? "/"}`)}
      
    >
      {children}
      <Typography
        variant="body1"
        sx={isScreenLg ? {color: textColor, textAlign: "center",width:'5rem', fontSize:fontSze}: {color: textColor, textAlign: "center", fontSize:fontSze, width:'5rem'}}
      >
        {text}
      </Typography>

      {isActive &&  (
        
       <hr style={
      !isScreenLg ?   {
        borderBottomColor:'white',
        width:'4rem'
      }:{
     
      width:'4rem',
      borderBottomWidth:'2px',
      borderBottomColor:"#009999",
    } // mobile format
      }/>
   )}
    </Box>
  );
};

export default Sidebar;
