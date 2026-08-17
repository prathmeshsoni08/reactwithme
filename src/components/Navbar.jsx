import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar({ onMenuClick }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={onMenuClick}>
          ☰
        </IconButton>
        <Typography variant="h6">TaskFlow</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
