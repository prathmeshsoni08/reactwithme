import Typography from '@mui/material/Typography'

const appName ="TaskFlow"

function Header(){
    return(
        <header className="app-header">
            <Typography variant ="h4">
                {appName}
            </Typography>
            <Typography variant ="body1">
            <p>Manage your task easily.</p>
            </Typography>
            </header>
       
    )
}
export default Header