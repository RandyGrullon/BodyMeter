// components/DietPlan.jsx
import React from "react";
import { Container, Typography } from "@mui/material";

const DietPlan = () => {
  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Diet Plan
      </Typography>
      {/* Render diet plan details */}
      {/* Example: */}
      <div className="border p-4 my-4">
        <Typography variant="body1">
          Here's your personalized diet plan.
        </Typography>
      </div>
    </Container>
  );
};

export default DietPlan;
