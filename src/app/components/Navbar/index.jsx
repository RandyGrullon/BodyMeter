'use client'
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import firebase from "@/app/firebase";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer"; // Metrures Icon
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"; // Body Icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile Icon
import LoginIcon from "@mui/icons-material/Login"; // Login Icon

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state


  useEffect(() => {
    // Escucha los cambios en el estado de autenticación del usuario
    const unsubscribe = firebase?.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Actualiza el estado según si el usuario está logueado o no
    });

    // Limpia el observador cuando el componente se desmonte
    return () => unsubscribe();
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontSize: "1rem" }}>
          Logo
        </Typography>
        <IconButton color="inherit" href="/inicio" style={{ fontSize: "0.8rem" }}>
          <HomeIcon style={{ fontSize: "1rem" }} />
          Inicio
        </IconButton>
        {isLoggedIn ? (
          <>
            <IconButton color="inherit" href="/metrures" style={{ fontSize: "0.8rem" }}>
              <EqualizerIcon style={{ fontSize: "1rem" }} />
              Metrures
            </IconButton>
            <IconButton color="inherit" href="/body" style={{ fontSize: "0.8rem" }}>
              <FitnessCenterIcon style={{ fontSize: "1rem" }} />
              Body
            </IconButton>
            <IconButton color="inherit" href="/profile" style={{ fontSize: "0.8rem" }}>
              <AccountCircleIcon style={{ fontSize: "1rem" }} />
              Profile
            </IconButton>
          </>
        ) : (
          <Button color="inherit" startIcon={<LoginIcon />} href="/login" style={{ fontSize: "0.8rem" }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
