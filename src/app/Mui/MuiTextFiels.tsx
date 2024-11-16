import { Stack, TextField } from '@mui/material'
import React from 'react'




const MuiTextFiels = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'> </TextField>
            <TextField label='Name' variant='filled'> </TextField>
            <TextField label='Name' variant='standard'> </TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' size='small' color='secondary'> </TextField></Stack>
       </Stack><br /><br /> 

       <Stack direction='row' spacing={2}>
        <TextField label='Password'
        type='password'
        helperText='Do not share your password with anyone'>

        </TextField>
       </Stack>
    </div>  
  )
}

export default MuiTextFiels
