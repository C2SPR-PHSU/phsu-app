import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Logo from "../../assets/images/logo-phsu.png";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockRounded from "@mui/icons-material/LockRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { PATH } from "@/routes/constants";
import { useNavigate } from "react-router-dom";
import useAlert from "@/hooks/useAlert";

import useAuthStore from "@/hooks/useAuthStore";

export default function Header() {
  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state: any) => state.setLogin);

  const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);
  const { setAlert } = useAlert();

  useEffect(() => {
    if (isAuthenticated) setAlert();
  }, [isAuthenticated]);

  const styleTextfield = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
      borderRadius: 0,
      border: "2px solid " + primaryColor,
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
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Toggles the menu open or closed.
   */
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  /**
   * Navigates to the recovery view and closes the menu.
   */
  const recoveryView = () => {
    navigate("/recovery");
    setMenuOpen(false);
  };

  /**
   * Closes the menu.
   */
  const toggleMenuOff = () => {
    setMenuOpen(false);
  };

  const home = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      {/* <--------------------------------- Upper Header ---------------------------------> */}
      <Box className={styles["upper-header"]}>
        <Typography className={styles["upper-text"]}>
          <Link to={PATH.ROOT} onClick={toggleMenuOff}>
            Home
          </Link>
        </Typography>
        <Typography className={styles["upper-text"]}>
          <Link to={PATH.REGISTER} onClick={toggleMenuOff}>
            Register
          </Link>
        </Typography>
      </Box>

      {/* <------------------------------- Auth Header ------------------------------------> */}
      <Toolbar className={styles["auth-header"]}>
        {/* Brand */}
        <Box
          className={styles["brand"]}
          sx={{
            gap: 3,
            ...(isScreenLg && { paddingLeft: "1rem" }),
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className={styles["brand-img"]}
            onClick={home}
          />
          <Typography
            variant="h6"
            className={styles["header-text"]}
            sx={{
              fontSize: "2rem",
              ...(isVeryScreenSmall && { display: "none" }),
              ...(isMedium && {
                fontSize: "140%",
              }),
            }}
          >
            Student Portal
          </Typography>
        </Box>

        {/* Auth Controls */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            pr: 5,
            ...(isScreenLg && { display: "none" }),
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
                borderRadius: 0,
                border: "2px solid " + primaryColor,
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
                borderRadius: 0,
                border: "2px solid " + primaryColor,
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
          <Box sx={{ display: "flex", flexDirection: "row", gap: "10%" }}>
            <Button
              variant="contained"
              className={styles["header-button"]}
              onClick={() => setLogin(email, password)}
            >
              Log In
            </Button>
            <IconButton
              sx={{
                display: "flex",
                backgroundColor: "#009999",
                minWidth: "2rem",
                minHeight: "2rem",
                maxHeight: "2rem",
                maxWidth: "2rem",
                "&:hover": {
                  backgroundColor: "#009999",
                },
              }}
              onClick={recoveryView}
            >
              <LockRounded className={styles["header-button-variant"]} />
            </IconButton>
          </Box>
        </Box>

        {/* Menu Toggle */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: "none",
            height: "4rem",
            paddingTop: "0",
            ...(isScreenLg && {
              display: "flex",
              flexDirection: "column",
              color: "#7f7f7f",
            }),
          }}
          onClick={toggleMenu}
        >
          <MenuIcon sx={{ height: "100%", width: "76%" }}></MenuIcon>
        </IconButton>
      </Toolbar>

      {/* <----------------------------- Menu Toggle --------------------------------------> */}
      <Toolbar
        sx={{
          display: "none",
          justifyContent: "end",
          backgroundColor: "#ffff",
          ...(menuOpen &&
            isScreenLg && {
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
          {/* Inputs */}
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

          {/* <-------------------------------- Buttons ---------------------------------->*/}
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Button
              variant="contained"
              className={styles["header-button"]}
              onClick={() => setLogin(email, password)}
            >
              Log In
            </Button>

            <IconButton
              sx={{
                display: "none",
                ...(isScreenLg && {
                  display: "flex",
                  backgroundColor: "#009999",
                  minWidth: "2rem",
                  minHeight: "2rem",
                  maxHeight: "2rem",
                  maxWidth: "2rem",
                  "&:hover": {
                    backgroundColor: "#009999",
                  },
                }),
              }}
              onClick={recoveryView}
            >
              <LockRounded sx={{ color: "white" }} />
            </IconButton>
          </Container>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
