// components/PersonalizedPlan.jsx
import React from "react";
import { Container, Typography, Button } from "@mui/material";

const PersonalizedPlan = () => {
  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Personalized Plans
      </Typography>
      {/* Render personalized plans based on user's body type */}
      {/* Example: */}
      <div className="border p-4 my-4">
        <Typography variant="h5" gutterBottom>
          Ectomorph Plan
        </Typography>
        <Typography variant="body1">
          This is your personalized plan for ectomorph body type.
        </Typography>
        <Button variant="contained" color="primary" className="mt-3">
          Start Plan
        </Button>
      </div>
      {/* Add more personalized plans for other body types */}
    </Container>
  );
};

export default PersonalizedPlan;
