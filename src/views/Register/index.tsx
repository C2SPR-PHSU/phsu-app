import { Container, Grid, Button, Box, Typography } from "@mui/material"
import Input from "@/components/Register-Input/Input"
import stylesRegister from './Register.module.scss'
import { Header, Footer } from "@/layout";
import { VisibilityOff as VisibilityOffIcon } from '@mui/icons-material';
export default function Register() {
  const size = '245px'
  return (
    <>
      <div className={stylesRegister.main} >
        <Header />

        <div className={stylesRegister.test}>
          testing something
        </div>

        <Footer />
      </div>


    </>

  )
}