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
import useAuthStore from "@/hooks/useAuthStore";
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { PATH } from "@/routes/constants";




export default function Header() {

  

  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));


  const styleTextfield = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "1rem",
      color: placeholderColor,
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: primaryColor,
    }
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state) => state.setLogin);
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };



  return (
    <AppBar position="static">
      <Box className={styles["upper-header"]}>
        <Typography className={styles["upper-text"]}>
          <Link to={PATH.ROOT}>Home</Link>
        </Typography>
        <Typography className={styles["upper-text"]}>
          <Link to={PATH.REGISTER}>Register</Link>
        </Typography>
      </Box>
      <Toolbar className={styles["auth-header"]} sx= {{
        
      }}>

        <Box className={styles["brand"]} sx={{ 
          gap: 3,

        ...(isScreenSmall && {paddingLeft: "1rem"}),
      }}
        >
          <img src={Logo} alt="logo" className={styles["brand-img"]} />
          <Typography variant="h6" className={styles["header-text"]} sx={{...(isVeryScreenSmall && { display: "none" })}}>
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
            // onClick={() => setLogin(email, password)}
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
              ...(isScreenSmall && {
                display: "flex",
                flexDirection: "column",
            })
             }}

             onClick={toggleMenu}
          >
            <MenuIcon sx={{
              paddingTop: "23%",
              color: "#9c9c9c",
              width: "3rem",
              height: "3rem",
              ...(menuOpen && {
                color: "#009999",
              })
            }}
            >
            </MenuIcon>

          </IconButton>

      </Toolbar>

      <Toolbar
      sx={{
        display: "none",
        justifyContent: "end",
  
        backgroundColor: "#ffff",
        ...(menuOpen && {
          display: "flex",
          height: "200px",
          transition: "height 0.9s ease",
          justifyContent: "end",
        }),
      }}
    >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            gap: "1.2rem",
            }}
        >
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          size="small"
          sx={styleTextfield}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          sx={styleTextfield}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Container sx={{display:"flex",flexDirection:"row", gap: "1rem",}}>

            <Button
              variant="contained"
              className={styles["toggle-button"]}
              onClick={() => setLogin(email, password)}
              sx={{marginBottom:"10px"}}
            >
              Log In
            </Button>

          
            <div className={styles["icon-container-toggle"]}>
            
              <LockRounded className={styles["header-button-variant"]} />
            </div>

        </Container>

      </Container>
        </Toolbar>

    </AppBar>
  );
}
