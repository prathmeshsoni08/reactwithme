import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function Dashboard() {
  return (
    <div>
      <Typography variant="h4">
        Dashboard
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">
            Total Tasks
          </Typography>

          <Typography variant="h4">
            0
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard