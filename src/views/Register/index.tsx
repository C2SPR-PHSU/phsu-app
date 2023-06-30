import { Container, Grid, Button, Box, Typography } from "@mui/material"
import Input from "@/components/Register-Input/Input"
import stylesRegister from './Register.module.scss'
import { Header, Footer } from "@/layout";
import { VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';
export default function Register() {
  const size = '245px'
  return (
    <>
      <Header />
      <div className={stylesRegister.main} >


        <div className={stylesRegister.test}>
          testing something
        </div>


      </div>
      <Footer />

    </>

  )
}