import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  // InputAdornment,
} from "@mui/material";
import Logo from "../../assets/images/logo-phsu.png";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockRounded from "@mui/icons-material/LockRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import useAuthStore from "@/hooks/useAuthStore";

export default function Header() {
  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state) => state.setLogin);



  return (
    <AppBar position="static">
      <Box className={styles["upper-header"]}>
        <Typography className={styles["upper-text"]}>Home</Typography>
        <Typography className={styles["upper-text"]}>Register</Typography>
      </Box>
      <Toolbar className={styles["auth-header"]}>

        <Box className={styles["brand"]} sx={{ 
          gap: 3,

        ...(isScreenSmall && {paddingLeft: "1rem"}),
      }}
        >
          <img src={Logo} alt="logo" className={styles["brand-img"]} />
          <Typography variant="h6" className={styles["header-text"]}>
            Student Portal
          </Typography>
        </Box>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          pr: 5,
          ...(isScreenSmall && { display: "none" }),
        }}
      >
          <PersonIcon className={styles["header-icons"]} />
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: primaryColor,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: primaryColor,
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: primaryColor,
                },
              "& .MuiInputLabel-outlined": {
                fontSize: "1rem",
                color: placeholderColor,
              },
              "& .MuiInputLabel-outlined.Mui-focused": {
                color: primaryColor,
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LockRounded className={styles["header-icons"]} />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: primaryColor,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: primaryColor,
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: primaryColor,
                },
              "& .MuiInputLabel-outlined": {
                fontSize: "1rem",
                color: placeholderColor,
              },
              "& .MuiInputLabel-outlined.Mui-focused": {
                color: primaryColor,
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            className={styles["header-button"]}
            onClick={() => setLogin(email, password)}
          >
            Log In
          </Button>
          <div className={styles["icon-container"]}>
            <LockRounded className={styles["header-button-variant"]} />
          </div>
        </Box>

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          
            sx={{ 
              display:"none",
              height: "3rem",
              Width: "rem",
              paddingTop: "0",
              ...(isScreenSmall && {display: "block"})
             }}
          >
            <MenuIcon sx={{
              color: "#9c9c9c",
              width: "3rem",
              height: "3rem",
            }}
            ></MenuIcon>
          </IconButton>

      </Toolbar>
    </AppBar>
  );
}
