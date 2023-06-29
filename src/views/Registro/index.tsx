import { Container, Grid, Stack, Button} from "@mui/material"
import Input from "@/components/Input/Input"
import './Registro.sass'
import Navbar from "@/components/Navbar/Navbar"
import { VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';


const Registro = () => {
  const size = '245px'
  return (
    <>
    <Navbar />
   <Container className="container_registro">
        {/*Header */}
      
      <div className="view_register">
        
        {/*Titulo */}
        <Grid className="titulo">
          <h1 className="title">Registration</h1>
          <div className="separator_style">
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
                type="number"
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
                type="number"
                />
            </Grid>
    
        </Grid>
        </form>

        {/*Cuarto Campo */}
        <form>
        <div className="separator_style">
            Adress
          </div>
          <Grid container spacing={1}>
          <Grid item>
                <Input 
                id='adressline1'
                htmlFor='Adress Line 1 *'
                placeholder='889668900'
                size={size}
                type="number"
                />
            </Grid>
            <Grid item>
            <Input 
                id='adressline2'
                htmlFor='Adress Line 2 *'
                placeholder='889668900'
                size={size}
                type="number"
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
        <Grid container >
          <Grid className="state_code">
            
            <Input 
                id='state'
                htmlFor='State *'
                placeholder='+1 000 0000'
                size="384px"
                type="number"
                />
          
            <Input 
                id='zipcode'
                htmlFor='Zip Code *'
                placeholder='05686100'
                size="384px"
                type="number"
                />      
          </Grid>  
        </Grid>
        </form>

        {/*Sexto Campos */}
  
        <form>
        <Grid container >
          <div className="separator_style">
            Creation Of Password
          </div>
          <Grid className="state_code">
            
            <Input 
                id='password'
                htmlFor='Password *'
                placeholder='**************'
                size="360px"
                type="password"
                icon={<VisibilityOffIcon />}
                />
          
            <Input 
                id='password'
                htmlFor='Confirm Password *'
                placeholder='**************'
                size="360px"
                type="password"
                icon={<VisibilityOffIcon />}
                />      
          </Grid>  
        </Grid>
        </form>


        {/*Seccion de botones */}
      <Stack spacing={2} direction='row'>
      <Button variant="outlined" className="cancel_button" 
      sx={{ color: '#009999', borderColor:'#009999', fontSize:12  }}
      >Cancel</Button>
      <Button variant="contained"  className="sign_up_button"
      sx={{ color: 'white', backgroundColor: '#009999' }}>Sign Up</Button>
     
      </Stack>


      </div>
    </Container>



   </>
  )
}

export default Registro
