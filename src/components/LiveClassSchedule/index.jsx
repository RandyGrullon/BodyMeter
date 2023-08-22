import React from "react";
import { Container, Typography, List, ListItem } from "@mui/material";

const LiveClassSchedule = () => {
  // Simulated data for live class schedule
  const liveClasses = [
    { id: 1, title: "Class 1", date: "2023-08-15", time: "10:00 AM" },
    { id: 2, title: "Class 2", date: "2023-08-16", time: "3:00 PM" },
    // Add more live class data
  ];

  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Live Class Schedule
      </Typography>
      <List>
        {liveClasses.map((liveClass) => (
          <ListItem key={liveClass.id}>
            <Typography variant="body1">
              {liveClass.title} - {liveClass.date} at {liveClass.time}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default LiveClassSchedule;
