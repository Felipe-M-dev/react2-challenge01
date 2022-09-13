import { Grid, Typography } from '@mui/material'
import React from 'react'

function home() {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Grid item>
        <Typography variant='h3' style={{marginTop: '16rem'}}>
          Bienvenido a <strong>Happy Cake</strong>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6'>
          El lugar de los pasteles felices
        </Typography>
      </Grid>
      <Grid item>
        <div style={{fontSize: '5rem'}}>🎂</div>
      </Grid>
    </Grid>
  )
}

export default home
