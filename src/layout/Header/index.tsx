import { AppBar, Toolbar, Typography, TextField, Button, Box, InputAdornment } from '@mui/material';
import Logo from '../../assets/images/logo-phsu.png';
import styles from './Header.module.scss';
import PersonIcon from '@mui/icons-material/Person';
import LockRounded from "@mui/icons-material/LockRounded";

export default function Header() {
    const primaryColor = '#009999';
    const placeholderColor = 'rgba(51, 51, 51, 0.4)';
    return (
        <AppBar position="static">
            <Box className={styles['upper-header']}>
                <Typography className={styles['upper-text']}>Home</Typography>
                <Typography className={styles['upper-text']}>Register</Typography>
            </Box>
            <Toolbar className={styles['auth-header']}>
                <Box className={styles['brand']} sx={{ gap: 3 }}>
                    <img src={Logo} alt="logo" className={styles['brand-img']} />
                    <Typography variant="h6" className={styles['header-text']}>Student Portal</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        pr: 5,
                    }}
                >
                    <PersonIcon className={styles['header-icons']} />
                    <TextField id="username" label="Username" variant="outlined" size="small"
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "& .MuiInputLabel-outlined": {
                                fontSize: '1rem',
                                color: placeholderColor,
                            },
                            "& .MuiInputLabel-outlined.Mui-focused": {
                                color: primaryColor,
                            },
                        }}
                    />
                    <LockRounded className={styles['header-icons']} />
                    <TextField id="password" label="Password" type="password" variant="outlined" size="small"
                        sx={{
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: primaryColor,
                            },
                            "& .MuiInputLabel-outlined": {
                                fontSize: '1rem',
                                color: placeholderColor,
                            },
                            "& .MuiInputLabel-outlined.Mui-focused": {
                                color: primaryColor,
                            },
                        }} />
                    <Button variant="contained" className={styles['header-button']}>Log In</Button>
                    <div className={styles['icon-container']}>
                        <LockRounded className={styles['header-button-variant']} />
                    </div>
                </Box>
            </Toolbar>
        </AppBar >
    );
}
