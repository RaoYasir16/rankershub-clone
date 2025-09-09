import { Box } from "@mui/material";
import React from "react";
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ 
      
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
        }}
        >

        {/* Navbar */}
        <Nav />

        {/* Page Content */}
        <Box sx={{ flex: 1 }}>
          {children}
        </Box>

        {/* Footer */}
        <footer style={{ textAlign: "center", padding: "10px 0", color: "#CC0DF4" }}>
          <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
      </Box>
    </>
  );
};

export default Layout;

