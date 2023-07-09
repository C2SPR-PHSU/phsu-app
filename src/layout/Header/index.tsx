import { useState } from "react";
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
import { login } from "@/utils";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { PATH } from "@/routes/constants";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ApiRequest from "@/utils/services/apiService";

export default function Header() {
  const primaryColor = "#009999";
  const placeholderColor = "rgba(51, 51, 51, 0.4)";
  const theme = useTheme();
  const isScreenLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isVeryScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

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

  // const setLogin = useAuthStore((state: any) => state.setLogin);
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .min(6, "Password must be at least 6 characters long")
        .max(100, "Password must be at most 100 characters"),

      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .max(20, "Password must be at most 20 characters"),
    }),

    onSubmit: (values) => {
      const request = {
        email: values.email,
        password: values.password,
      };
      const api = new ApiRequest();
      // url request
      api.resource = login;
      try {
        const response = api.post({
          body: request,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

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
      <Toolbar className={styles["auth-header"]} sx={{}}>
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
        <form onSubmit={formik.handleSubmit}>
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
              label="Email"
              variant="outlined"
              name="email"
              size="small"
              sx={styleTextfield}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <LockRounded className={styles["header-icons"]} />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              size="small"
              value={formik.values.password}
              sx={styleTextfield}
              onChange={formik.handleChange}
            />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10%" }}>
              <Button
                variant="contained"
                className={styles["header-button"]}
                type="submit"
              >
                Log In
              </Button>
              <IconButton
                sx={{
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
                }}
                onClick={recoveryView}
              >
                <LockRounded className={styles["header-button-variant"]} />
              </IconButton>
            </Box>
          </Box>
        </form>

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
      <form onSubmit={formik.handleSubmit}>
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
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              value={formik.values.email}
              sx={styleTextfield}
              onChange={formik.handleChange}
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              name="password"
              value={formik.values.password}
              sx={styleTextfield}
              onChange={formik.handleChange}
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
                type="submit"
                className={styles["toggle-button"]}
                sx={{ marginBottom: "10px" }}
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
                <LockRounded
                  className={styles["header-button-variant-toggle"]}
                />
              </IconButton>
            </Container>
          </Container>
        </Toolbar>
      </form>
    </AppBar>
  );
}
