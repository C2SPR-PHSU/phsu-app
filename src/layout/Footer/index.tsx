import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './Footer.module.scss';
import { useMediaQueries } from '@/components/BMediaQuerys';


export default function Footer() {
    const {isMedium } = useMediaQueries();
    return (
        <Box className={isMedium? styles['footer-medium']: styles['footer']}>
            <Typography align="left">
                Copyright © {new Date().getFullYear()}
            </Typography>
        </Box>
    )
}
