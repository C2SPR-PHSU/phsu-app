import { styled, Grid } from '@mui/material';
import Navigator from '../../components/Navigator';
import Navbar from '@/components/Navbar/Navbar';
import WelcomeImage from '../../assets/welcomeImage.png';
import List_item from '@/components/ListItem/ListItem';
import './Login.sass';



const WelcomeImageContainer = styled('div')({
  position: 'relative',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Welcome_text = styled('div')({
  position: 'absolute',
  top: '39%',
  left: '52%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '70px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  fontFamily: 'title',
});

const Welcome_descritions = styled('div')({
  position: 'absolute',
  top: '46%',
  left: '48%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  fontFamily: 'title',
});


const Title = styled('div')({

  marginTop: '1rem',  
  marginLeft: '4rem',
  color: '#f7941d',
  fontSize: '42px',
  fontWeight: 'bold',
  fontFamily: 'title',
});



const Login = () => {






  return (
    <>
        <Navigator />
        <Navbar />
        <Grid container className="body">

          {/* <------------------GRID PARA LA IMAGEN-------------------> */}
          <Grid item xs={12} md={6}>


            <WelcomeImageContainer>
                <img src={WelcomeImage} alt="Imagen" />

                <Welcome_text>
                  Welcome
                </Welcome_text>

                <Welcome_descritions>
                  The PHSU Student Portal is a one-stop for services request. Avoid lines, recive updates on the status of your request 
                </Welcome_descritions>

            </WelcomeImageContainer>


          

          </Grid>

          <Grid item xs={12} md={6}>

            <Grid container className="Request_service_container">

              <Grid item xs={12}>
                <Title>Request Service</Title>
                  
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
