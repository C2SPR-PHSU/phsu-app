import { useState } from "react";
import { Grid } from "@mui/material";
import { Lock } from "@mui/icons-material";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/logo.png";
// import Button from '@mui/material/Button';
import stylesDashboard from "./Navbar.module.sass";
import useAuthStore from "@/hooks/useAuthStore";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useAuthStore((state) => state.setLogin);

  return (
    <header className={stylesDashboard.containerDashboard}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          <div className={stylesDashboard.containerLogoAndTitle}>
            <img
              src={Logo}
              alt="logoUniversity"
              className={stylesDashboard.styleLogoUniversity}
            />
            <div className={stylesDashboard.title}>Student Portal</div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          spacing={2}
          justifyContent="flex-end"
        >
          <div className={stylesDashboard.containerInputs}>
            <PersonIcon className={stylesDashboard.iconLogIn} />
            <input
              type="text"
              placeholder="User"
              className={stylesDashboard.inputStyle}
              onChange={(event) => setEmail(event?.target.value)}
            />

            <Lock className={stylesDashboard.iconLogIn} />
            <input
              type="text"
              placeholder="Password"
              className={stylesDashboard.inputStyle}
              onChange={(event) => setPassword(event?.target.value)}
            />

            {/* <Button variant="contained" className={`${stylesDashboard.signUpButton} customSignUpButton`}>Log In</Button> */}

            <button
              type="submit"
              className={stylesDashboard.signUpButton}
              onClick={() => setLogin(email, password)}
            >
              Log In
            </button>

            <div className={stylesDashboard.circleRestoresPassword}>
              <HttpsRoundedIcon className={stylesDashboard.iconRecovery} />
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
