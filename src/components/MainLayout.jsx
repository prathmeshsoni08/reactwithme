import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileDrawer from "../components/MobileDrawer";

function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </Box>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

export default MainLayout;
