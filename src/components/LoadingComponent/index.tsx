import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'

const LoadingComponent = () => {
    return (
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={11} sx={{ marginTop: "2.5em !important", marginBottom: "2.5em !important", textAlign: 'center' }}>
                    <Typography variant="body1" gutterBottom sx={{ fontSize: '1.5em !important', fontWeight: 'bolder', marginBottom: "1em !important", marginTop: "2em !important" }}>
                        Loading
                    </Typography>
                    <br /><br />
                    <CircularProgress color="secondary" />
                </Grid>

                <Grid item xs={11} sx={{ marginBottom: "2.5em !important" }}>

                    <Grid container alignItems="center" spacing={0}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography variant="body1" color="textPrimary">
                                Your data is being sent, please wait. Please do not close or reload this page.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoadingComponent