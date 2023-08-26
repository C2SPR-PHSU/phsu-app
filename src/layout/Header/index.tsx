import { useState, useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { Login, Register } from "@/views";
import Recovery from "@/views/Recovery";

export default function Header() {
  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state: any) => state.setLogin);
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  const authenticateUser = async () => {
    try {
      await setLogin(email, password);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) setAlert(error.message, "error");
    }
  };

  const [checked, setChecked] = useState<boolean | null>(null);
  const [recoveryView, setRecoveryView] = useState(false);
  //
  const containerRef = useRef(null);
  const ChangeToLogin = () => {
    setChecked(false);
    setRecoveryView(false);
  };
  const ChangeToRegister = () => {
    setChecked(true);
    setRecoveryView(false);
  };

  const ChangeRecoveryView = () => {
    setRecoveryView(true);
  };

  return (
    <>
      <AppBar position="static">
        <Box className={styles["upper-header"]}>
          <Typography className={styles["upper-text"]}>
            <Button
              onClick={ChangeToLogin}
              sx={{ color: "white", fontSize: 12 }}
              size="small"
            >
              Home
            </Button>
          </Typography>
          <Typography className={styles["upper-text"]}>
            <Button
              onClick={ChangeToRegister}
              sx={{ color: "white", fontSize: 12 }}
              size="small"
            >
              Register
            </Button>
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
              onClick={() => authenticateUser()}
              size="small"
            >
              Log In
            </Button>
            <div
              className={styles["icon-container"]}
              onClick={() => ChangeRecoveryView()}
            >
              <LockRounded className={styles["header-button-variant"]} />
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      {recoveryView ? (
        <Box
          sx={{
            height: "90%",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            minHeight: "85vh",
          }}
          ref={containerRef}
        >
          <Slide
            direction="left"
            in={recoveryView}
            container={containerRef.current}
            key="recovery"
          >
            <Box sx={{ minWidth: "100%" }}>
              <Recovery />
            </Box>
          </Slide>
        </Box>
      ) : (
        <Box
          sx={{
            height: "90%",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            minHeight: "85vh",
          }}
          ref={containerRef}
        >
          {/* View default */}
          {checked === null && (
            <Box sx={{ minWidth: "100%" }} key="default">
              <Login />
            </Box>
          )}

          {/* Views width animations */}

          {!checked && checked !== null ? (
            <Slide
              direction="right"
              in={!checked}
              container={containerRef.current}
              key="login"
            >
              <Box sx={{ minWidth: "100%" }}>
                <Login />
              </Box>
            </Slide>
          ) : (
            <Slide
              direction="left"
              in={checked}
              container={containerRef.current}
              key="register"
            >
              <Box sx={{ minWidth: "100%" }}>
                <Register />
              </Box>
            </Slide>
          )}
        </Box>
      )}
    </>
  );
}
