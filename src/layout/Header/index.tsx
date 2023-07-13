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
import useAuthStore from "@/hooks/useAuthStore";
import useAlert from "@/hooks/useAlert";
import { PATH } from "@/routes/constants";
import { Link } from "react-router-dom";

export default function Header() {
  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state: any) => state.setLogin);
  const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);
  const { setAlert } = useAlert();

  useEffect(() => {
    if (isAuthenticated) setAlert();
  }, [isAuthenticated]);

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
      <Toolbar className={styles["auth-header"]}>
        <Box className={styles["brand"]} sx={{ gap: 3 }}>
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
                  cursor: "default",
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
              <LockRounded className={styles["header-button-variant-toggle"]} />
            </IconButton>
          </Container>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
