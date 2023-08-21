 
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Routine = ({ title, description, price, onClick }) => (
  <Card style={{ margin: "1rem", padding: "1rem", minWidth: "200px" }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Typography variant="h6">{price ? `$${price}` : "Gratis"}</Typography>
      <Button variant="contained" color="primary" onClick={onClick}>
        Acceder
      </Button>
    </CardContent>
  </Card>
);

export default Routine;
