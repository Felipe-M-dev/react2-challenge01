import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Grid } from '@mui/material'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#dc3546'}}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Grid item>
                <Grid container direction='row' >
                  <Grid item>
                    <Typography variant='h6'>
                      <Link to='/' style={{color: 'white', textDecoration: 'none', marginLeft: '1rem'}}>
                          🏠 Home
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='h6'>
                        <Link to='/contacto' style={{color: 'white', textDecoration: 'none', marginLeft: '2rem'}}>
                            📙 Contacto
                        </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='h6'>
                    <Link to='/' style={{color: 'white', textDecoration: 'none', marginRight: '1rem'}}>
                        Happy Cake 🍰
                    </Link>            
                </Typography>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}