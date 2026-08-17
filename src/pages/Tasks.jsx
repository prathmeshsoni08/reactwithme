import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Tasks() {
  return (
    <div>
      <Typography variant="h4">
        Tasks
      </Typography>

      <Typography variant="body1">
        Your tasks will appear here.
      </Typography>

      <Button variant="contained">
        Add Task
      </Button>
    </div>
  )
}

export default Tasks