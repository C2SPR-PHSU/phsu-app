
import { Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import stylesDashboard from './Navbar.module.sass';



const Navbar = () => {


  return (
    <header className={stylesDashboard.containerDashboard}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <div className={stylesDashboard.containerLogoAndTitle}>
            <img src={Logo} alt="logoUniversity" className={stylesDashboard.styleLogoUniversity} />
            <div className={stylesDashboard.title}>Student Portal</div>
          </div>
        </Grid>

        {/* <---------------------ELEMENTS FOR FORM--------------------------> */}
        <Grid item xs={12} sm={6} container spacing={2} justifyContent="flex-end">

            <div className={stylesDashboard.containerInputs}>

                <PersonIcon className={stylesDashboard.iconLogIn} />
                <input type="text" placeholder="User" className={stylesDashboard.inputStyle} />

                <Lock className={stylesDashboard.iconLogIn} />
                <input type="text" placeholder="Password" className={stylesDashboard.inputStyle} />

                {/* <Button variant="contained" className={`${stylesDashboard.signUpButton} customSignUpButton`}>Log In</Button> */}

                <button type="submit" className={stylesDashboard.signUpButton}>
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
