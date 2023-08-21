 
import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Plan = ({ title, price, features, onClick }) => (
  <Card style={{ margin: "1rem", padding: "1rem", minWidth: "200px" }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">{price ? `$${price}` : "Gratis"}</Typography>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={onClick}>
        Seleccionar
      </Button>
    </CardContent>
  </Card>
);

const Plans = ({ onFreePlanSelected, onPaidPlanSelected }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Plan
      title="Plan Gratuito"
      features={["Característica 1", "Característica 2"]}
      onClick={onFreePlanSelected}
    />
    <Plan
      title="Plan de Pago"
      price={9.99}
      features={["Característica 1", "Característica 2", "Característica 3"]}
      onClick={onPaidPlanSelected}
    />
  </div>
);

export default Plans;
