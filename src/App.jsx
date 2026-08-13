import React from 'react'
import Header from './components/Header'
import Box from '@mui/material/Box'
import Stack  from '@mui/material/Stack'
import Button  from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import  Container  from '@mui/material/Container'
const App = () => {
  return (
    <>

    <Navbar />
      <Box sx={{ display: 'flex' }}>
        < Sidebar />
    <Box sx={{padding: 3 ,flex: 1}}>
      < Container sx={{paddingY:3}}>
      <Typography variant='h5'>
        welcome to the TaskFlow
      </Typography>

      <Typography variant='body1'>
        your personal task management application.
      </Typography>

    <Stack
     direction={{xs: 'column' , sm: 'row'}}
     spacing={2}
     sx={{marginTop: 2}}
     >
      <Button variant='contained'>
        Add tasks
      </Button>
      <Button variant ="outlined">
        View tasks
      </Button>
    </Stack>
    </Container>
    </Box>
    </Box>
    </>
  )
}

export default App
