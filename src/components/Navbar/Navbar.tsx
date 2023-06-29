import { Grid } from '@mui/material';
import './Navbar.sass'; // Importar el archivo de estilos CSS
import { Lock, HelpOutline } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className="Container">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <div className="logo_container">
            <img src={Logo} alt="logo" className="logo" />
            <h1 className="title">Student Portal</h1>
          </div>
        </Grid>

        {/* <---------------------ELEMENTS FOR FORM--------------------------> */}
        <Grid item xs={12} sm={6} container spacing={2} justifyContent="flex-end">

            <div className="inputs">

            <PersonIcon className="input_icon" />
            <input type="text" placeholder="User" className="input_style" />

            <Lock className="input_icon" />
            <input type="text" placeholder="Password" className="input_style" />

            <button type="submit" className="botonStyle">
              Log In
            </button>

            <HelpOutline className="input_icon"/>

            </div>
          
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
