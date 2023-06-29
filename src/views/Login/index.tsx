import { styled, Grid } from '@mui/material';
import Navigator from '../../components/Navigator';
import Navbar from '@/components/Navbar/Navbar';
import WelcomeImage from '../../assets/welcomeImage.png';
import List_item from '@/components/ListItem/ListItem';
import './Login.sass';


const WelcomeImageContainer = styled('img')({
  // Estilos para la imagen de bienvenida
  maxWidth: '100%',
  maxHeight: '100%',
});

const Login = () => {
  return (
    <>
        <Navigator />
        <Navbar />
        <Grid container className="body">

          {/* <------------------GRID PARA LA IMAGEN-------------------> */}
          <Grid item xs={12} md={6}>
            <WelcomeImageContainer src={WelcomeImage} alt="fondo" className="WelcomeImageContainer" />
          </Grid>

          <Grid item xs={12} md={6}>

            <Grid container className="Request_service_container">

              <Grid item xs={12}>
                <h2 className="Request_service_title">
                  Request Service
                </h2>
              </Grid>

              {/* <--------------------Cuerpo de la Seccion  */}
              <Grid item xs={12}>

                <Grid container className="content">


                  <List_item 
                    number='1'
                    listItem='Admissions Documents Upload'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />

                  <List_item 
                    number='2'
                    listItem='Credentialing Process'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />

                    <List_item 
                    number='3'
                    listItem='Financial Add Doc. Upload'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />


                  <List_item 
                    number='4'
                    listItem='Transcript Request'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />


                  <List_item 
                    number='5'
                    listItem='Application for Graduation'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />

                  <List_item 
                    number='6'
                    listItem='Certificate of Graduation'
                    descriptions='Message for instructions or description'
                    url='https://www.ejemplo.com'
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    </>
  );
};

export default Login;
