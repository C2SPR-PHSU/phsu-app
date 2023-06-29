import { Container, Grid,Button} from "@mui/material"
import Input from "@/components/Input/Input"
import stylesRegister from './Register.module.sass'

import { VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';


const Register = () => {
  const size = '245px'
  return (
    <div className="principalDivRegister">
   
   <Container className={stylesRegister.registerContainer}>
        {/*Header */} 
      
      <div className={stylesRegister.contentRegister}>
        
        {/*Titulo */}
        <Grid className={stylesRegister.titleDiv}>
          <h1 className={stylesRegister.titleRegister}>Registration</h1>
          <div className={stylesRegister.subtitleRegister}>
            Peronal Information
          </div>
        </Grid>

        {/*Primeros campos  */}
        <form>
        <Grid container spacing={1}>
                  <Input 
                id='name'
                htmlFor='Name *'
                placeholder='jhon'
                size={size}
                type="text"
                />
           
            <Input 
                id='middle_name'
                htmlFor='Middle Name'
                placeholder='Francis '
                size={size}
                type="text"
                />
           
            <Input 
                id='lastname'
                htmlFor='Last Name *'
                placeholder='smith'
                size={size}
                type="text"
                />
           
        </Grid>
        </form>

        {/*Segundos campos */}
        <form>
        <Grid container spacing={1}>
            <Grid item>
                <Input 
                id='secondlastname'
                htmlFor='Second Last Name'
                placeholder='evans'
                size={size}
                type="text"
                />
            </Grid>
            <Grid item>
            <Input 
                id='date'
                htmlFor='Date or Birth *'
                placeholder=''
                size={size}
                type="date"
                />
            </Grid>
            <Grid item>
            <Input 
                id='phone'
                htmlFor='Cell Phone *'
                placeholder='Jhon'
                size={size}
                type="text"
                />
            </Grid>
        </Grid>
        </form>

        {/*Terceros campos */}
        <form>
        <Grid container spacing={1}>
            <Grid item>
                <Input 
                id='email'
                htmlFor='Email *'
                placeholder='example@email.com'
                size={size}
                type="email"
                />
            </Grid>
            <Grid item>
            <Input 
                id='id'
                htmlFor='Student ID *'
                placeholder='05686100'
                size={size}
                type="text"
                />
            </Grid>
    
        </Grid>
        </form>

        {/*Cuarto Campo */}
        <form>
        <div className={stylesRegister.separatorDivTitles}>
            Adress
          </div>
          <Grid container spacing={1}>
          <Grid item>
                <Input 
                id='adressline1'
                htmlFor='Adress Line 1 *'
                placeholder='889668900'
                size={size}
                type="text"
                />
            </Grid>
            <Grid item>
            <Input 
                id='adressline2'
                htmlFor='Adress Line 2 *'
                placeholder='889668900'
                size={size}
                type="text"
                />
            </Grid>
            <Grid item>
            <Input 
                id='city'
                htmlFor='City *'
                placeholder='City'
                size={size}      
                type="text"
                  />
            </Grid>
          </Grid>
        </form>

        {/*Quinto campo */}      
        <form>
        <Grid container className={stylesRegister.campoRegistro} >
          <Grid className={stylesRegister.separateStateCode}>
            
            <Input 
                id='state'
                htmlFor='State *'
                placeholder='+1 000 0000'
                size="24rem"
                type="text"
                />
          
            <Input 
                id='zipcode'
                htmlFor='Zip Code *'
                placeholder='05686100'
                size="24rem"
                type="text"
                />      
          </Grid>  
        </Grid>
        </form>

        {/*Sexto Campos */}
  
        <form>
        <Grid container className={stylesRegister.campoRegistro} >
          <div className={stylesRegister.separatorDivTitles}>
            Creation Of Password
          </div>
          <Grid className={stylesRegister.separateStateCode} >
      
            <Input 
                id='password'
                htmlFor='Password *'
                placeholder='**************'
                size="22.5rem"
                type="password"
                icon={<VisibilityOffIcon />}
                />
          
            <Input 
                id='password'
                htmlFor='Confirm Password *'
                placeholder='**************'
                size="22.5rem"
                type="password"
                icon={<VisibilityOffIcon />}
                />      
          </Grid>  
        </Grid>
        </form>


        {/*Seccion de botones */}
      <Grid container className={stylesRegister.btnRegister}>
      <Button variant="outlined" className={stylesRegister.cancelButton}>Cancel</Button>
      <Button variant="contained" className={`${stylesRegister.signUpButton} customSignUpButton`}>Sign Up</Button>
     
      </Grid>



      </div>

    </Container>


    <footer className={stylesRegister.footerRegister}>
    <div className={stylesRegister.footerContent}>
        <p>© {new Date().getFullYear()} Tu Compañía. Todos los derechos reservados.</p>
    </div>
</footer>

   </div>
  )
}

export default Register
