import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function MobileDrawer({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 220, padding: 2 }}>
        <Typography variant="h6">TaskFlow</Typography>
        <Typography>Dashboard</Typography>
        <Typography>
          <Link
            to="/task"
            style={{
              color: "#673ab7",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            task
          </Link>
        </Typography>
        <Typography>Completed</Typography>
        <Typography>Profile</Typography>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer;
