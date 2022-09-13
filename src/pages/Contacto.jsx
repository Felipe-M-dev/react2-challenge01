import { Grid, Box, TextField, Typography, Stack, Button } from '@mui/material'
import React from 'react'

function Contacto() {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Typography variant='h3' style={{ marginTop: '3rem' }}>
        Cuentanos, ¿en que te podemos ayudar?
      </Typography>
      <Box>
        <Typography style={{ textAlign: 'center', marginTop: '1rem'}}>
          Correo:
        </Typography>
        <TextField
          id='outlined-textarea'
          placeholder='name@example.com'
          multiline
          style={{ width: '60rem'}}
        />
        <Typography style={{ textAlign: 'center', marginTop: '1rem'}}>
          Descripción:
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          style={{ width: '60rem'}}
        />
      </Box>
      <Box>
        <Button variant='contained' style={{marginTop: '1rem', backgroundColor: '#dc3546'}}>
          Enviar
        </Button>
      </Box>
    </Grid>
  )
}

export default Contacto
