import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Box
      sx={{
        width: 260,
        padding: 3,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
      }}
    >
      {/* MENU TITLE */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          color: "#673ab7",
          marginBottom: 3,
        }}
      >
        TaskFlow Menu
      </Typography>

      {/* MENU ITEMS */}
      <Stack spacing={1.5}>
        <Button
          component={Link}
          to="/dashboard"
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#333",
            padding: 1.5,
            borderRadius: 2,

            "&:hover": {
              backgroundColor: "#f3effc",
              color: "#673ab7",
            },
          }}
        >
          Dashboard
        </Button>

        <Button
          component={Link}
          to="/task"
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#333",
            padding: 1.5,
            borderRadius: 2,

            "&:hover": {
              backgroundColor: "#f3effc",
              color: "#673ab7",
            },
          }}
        >
          My Tasks
        </Button>

        <Button
          component={Link}
          to="/profile"
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#333",
            padding: 1.5,
            borderRadius: 2,

            "&:hover": {
              backgroundColor: "#f3effc",
              color: "#673ab7",
            },
          }}
        >
          Profile
        </Button>

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#d32f2f",
            padding: 1.5,
            borderRadius: 2,

            "&:hover": {
              backgroundColor: "#ffebee",
            },
          }}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
}

export default Menu;
