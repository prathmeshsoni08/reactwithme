import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        padding: 2,
        borderRight: "2px solid #ddd",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h6">
        <Link
          to="/menu"
          style={{
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Menu
        </Link>
      </Typography>
      <Typography>
        <Link
          to="/Profile"
          style={{
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Profile
        </Link>
      </Typography>

      <Typography>
        <Link
          to="/dashboard"
          style={{
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Dashborad
        </Link>
      </Typography>

      <Typography>
        <Link
          to="/task"
          style={{
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          task
        </Link>
      </Typography>

      <Typography>
        <Link
          to="/completed"
          style={{
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Completed Tasks
        </Link>
      </Typography>
    </Box>
  );
}

export default Sidebar;
