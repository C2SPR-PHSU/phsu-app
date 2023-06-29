
import { styled, Grid } from '@mui/material';
import './Navbar.sass'; 
import { Lock, HelpOutline } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../../assets/logo.png';

// import axios from 'axios';


// interface LogIn {
//   user: string;
//   password: string;
// }


const Navbar = () => {

  const Title = styled('div')({

    marginTop: '1rem',  
    color: '#f7941d',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'title',
  });


  // const login = async (login: LogIn) => {
  //   try {
  //     const response = await axios.post('https://example.com/login',login );
  //     console.log(response.data); // Aquí puedes manejar la respuesta de la solicitud
  //   } catch (error) {
  //     console.error(error); // Aquí puedes manejar el error en caso de que ocurra
  //   }
  // };


  return (
    <header className="Container">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6}>
          <div className="logo_container">
            <img src={Logo} alt="logo" className="logo" />

            <Title>
            Student Portal
            </Title>
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
