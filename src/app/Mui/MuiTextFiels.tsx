import { Stack, TextField } from '@mui/material'
import React from 'react'




const MuiTextFiels = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name'></TextField>
        </Stack>
       </Stack>
    </div>
  )
}

export default MuiTextFiels
