import { Grid } from '@mui/material';
import Navigator from '../../components/Navigator';
import Navbar from '@/components/Navbar/Navbar';
import WelcomeImage from '../../assets/welcome.png';
import List_item from '@/components/ListItem/ListItem';
import stylesLogin from './Login.module.sass'




const Login = () => {

  return (
    <>

      <Grid item xs={12} md={6}>
        <Navigator />
        <Navbar />
      </Grid>

      
        <Grid container className="body">

         
          <Grid item xs={12} md={6}>


             <div className={stylesLogin.welcomeImageContainer }>
                <img src={WelcomeImage} alt="ImagenTheWelcome" />

                <div className={stylesLogin.welcomeText }>
                  Welcome
                </div>

                <div className={stylesLogin.welcomeDescritions}>
                  The PHSU Student Portal is a one-stop for services request. Avoid lines, recive updates on the status of your request, and maintain access to documents and certifications. 
                </div>
              </div> 


          </Grid>

          <Grid item xs={12} md={6}>

            <Grid container className={stylesLogin.requestServiceContainer}>

              <Grid item xs={12}>

                <div className={stylesLogin.title}>Request Service</div>
                  
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
        

          <div className={stylesLogin.footer}></div>

          
      
    </>
  );
};

export default Login;
