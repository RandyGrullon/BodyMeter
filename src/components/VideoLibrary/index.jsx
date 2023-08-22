import React from "react";
import { Container, Typography, Grid, Card, CardMedia } from "@mui/material";

const VideoLibrary = () => {
  // Simulated data for video thumbnails
  const videoData = [
    { id: 1, title: "Video 1", thumbnailUrl: "/video1.jpg" },
    { id: 2, title: "Video 2", thumbnailUrl: "/video2.jpg" },
    // Add more video data
  ];

  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>
      <Grid container spacing={3}>
        {videoData.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={video.thumbnailUrl}
                alt={video.title}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoLibrary;
