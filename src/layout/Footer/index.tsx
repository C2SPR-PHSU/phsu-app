import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <Container maxWidth="sm" className={styles['footer']}>
            <Typography align="left">
                Copyright © {new Date().getFullYear()}
            </Typography>
        </Container>
    )
}
