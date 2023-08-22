import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";

const ExerciseVideo = ({ videoUrl }) => {
  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Exercise Video
      </Typography>
      <Card>
        <CardMedia
          component="iframe"
          height="315"
          src={videoUrl}
          title="Exercise Video"
          allowFullScreen
        />
      </Card>
    </Container>
  );
};

export default ExerciseVideo;
