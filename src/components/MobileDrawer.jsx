import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MobileDrawer({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 220, padding: 2 }}>
        <Typography variant="h6">TaskFlow</Typography>
        <Typography>Dashboard</Typography>
        <Typography>Tasks</Typography>
        <Typography>Completed</Typography>
        <Typography>Profile</Typography>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer;
