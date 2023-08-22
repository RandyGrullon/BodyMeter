// components/ProgressChart.jsx
import React from "react";
import { Container, Typography } from "@mui/material";

const ProgressChart = () => {
  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Progress Chart
      </Typography>
      {/* Render progress chart here */}
      {/* Example: */}
      <div className="border p-4 my-4">
        <Typography variant="body1">
          Here's your progress chart over time.
        </Typography>
      </div>
    </Container>
  );
};

export default ProgressChart;
