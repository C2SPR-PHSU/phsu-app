import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Logo from "../../assets/images/logo-phsu.png";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockRounded from "@mui/icons-material/LockRounded";
import useAuthStore from "@/hooks/useAuthStore";
import useAlert from "@/hooks/useAlert";
import { PATH } from "@/routes/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
    } catch (error: any) {
      setAlert(error?.message, "error")
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>

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
          <Grid container sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'space-between'
          }}>

            <Grid item xs={12} lg={6} sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '5rem',
            }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                  maxWidth: '100%',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>

                <img src={Logo} alt="logo" style={{ maxWidth: '150px', height: 'auto', marginBottom: isMobile ? '1rem' : '0' }} />
                <Typography variant="h6" className={styles["header-text"]}
                  sx={{
                    textAlign: isMobile ? 'center' : 'center',
                    paddingLeft: isMobile ? '0' : '1.5rem !important'
                  }}>
                  Student Portal
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'center'
            }}>
              <Grid container sx={{ display: 'flex', alignItems: "center", justifyContent: 'end' }}>

                <Grid item xs={12} lg={3} sx={{
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ fontSize: '1.2rem', color: '#f7941d', marginRight: '0.5rem !important' }} />
                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      size="small"
                      sx={{
                        backgroundColor: 'white !important',
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          borderColor: primaryColor,
                          borderRadius: 0,
                          border: "2px solid"
                        },
                        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          borderColor: primaryColor,
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: primaryColor,
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          backgroundColor: 'white'
                        },
                        "& .MuiInputLabel-outlined": {
                          fontSize: "1rem",
                          color: placeholderColor,
                        },
                        "& .MuiInputLabel-outlined.Mui-focused": {
                          color: primaryColor,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "0.7rem",
                        },
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </Grid>


                <Grid item xs={12} lg={3}
                  sx={{
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LockRounded sx={{ fontSize: '1.2rem', color: '#f7941d', marginRight: '0.5rem !important' }} />
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
                  </Box>
                </Grid>

                <Grid item xs={12} lg={3}
                  sx={{
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      variant="contained"
                      className={styles["header-button"]}
                      onClick={() => authenticateUser()}
                      sx={{
                        display: 'inline-flex',
                        mr: '1rem !important'
                      }}
                    >
                      Log In
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() => navigate("/recovery")}
                      sx={{
                        borderRadius: '50%',
                        width: 35, // Ancho del botón
                        height: 35, // Altura del botón, igual que el ancho para hacerlo circular
                        backgroundColor: '#009999',
                        padding: 0, // Esto elimina el padding interno, asegurando que no afecte la forma
                        minWidth: 0, // Asegura que no hay un ancho mínimo que pueda afectar
                        '& .MuiSvgIcon-root': { // Esto ajusta el tamaño del icono dentro del botón
                          fontSize: '1.2rem',
                          color: '#ffffff'
                        }
                      }}
                    >
                      <LockRounded />
                    </Button>
                  </Box>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Toolbar>

      </AppBar>
    </Box >
  );
}
