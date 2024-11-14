import React from 'react'
import { Button, Stack,IconButton } from '@mui/material'
import { Send } from '@mui/icons-material'

export const MuiButton = () => {
  return (
    <div>
        <Stack spacing={4}>
      <Button variant='text' href='https://google.com'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button><br />
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color= 'primary'>Primary</Button>
        <Button variant='contained' color= 'secondary'>Secondary</Button>
        <Button variant='contained' color= 'warning'>Warning</Button>
        <Button variant='contained' color= 'error'>Error</Button>
        <Button variant='contained' color= 'info'>Info</Button>
        <Button variant='contained' color= 'success'>Success</Button>
      </Stack>
      
        <br /><br />
        <Stack spacing= {2} direction= 'row'>
<Button variant='contained'  href='https://www.google.com/search?q=wifi+speed+test+online&oq=wifi+speed+tes&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyCggAEAAYsQMYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQBRhA0gEINzY0OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' startIcon= {<Send/>}> Send</Button>

        </Stack>
    </div>
  )
}


