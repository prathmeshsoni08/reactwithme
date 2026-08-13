import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Sidebar() {
  return (
    <Box
      sx={{
        width: {
            xs:160,
            sm:220
        },
        padding: 2,
        borderRight: '1px solid #ddd',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Typography variant="h6">
        Menu
      </Typography>

      <Typography>
        Dashboard
      </Typography>

      <Typography>
        Tasks
      </Typography>

      <Typography>
        Completed
      </Typography>
    </Box>
  )
}

export default Sidebar