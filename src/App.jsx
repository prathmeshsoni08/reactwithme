import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileDrawer from "./components/MobileDrawer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassword";

const App = () => {
  const [openPage, setOpenPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  // Show authentication pages before login
  if (!isLoggedIn) {
    if (openPage === "login") {
      return <Login handleClick={setOpenPage} onLogin={handleLogin} />;
    }

    if (openPage === "signup") {
      return <Signup setOpenPage={setOpenPage} />;
    }

    if (openPage === "forgetps") {
      return <ForgotPassword setOpenPage={setOpenPage} />;
    }
  }

  // Show main application after successful login
  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1 }}>
          <Container sx={{ py: 3 }}>
            <Typography variant="h5">Welcome to TaskFlow</Typography>

            <Typography variant="body1">
              Your personal task management application.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button variant="contained">Add Tasks</Button>

              <Button variant="outlined">View Tasks</Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default App;
