import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function Profile() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">
          Profile
        </Typography>

        <Typography variant="body1">
          Manage your profile information.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Profile