// components/CommunityPage.jsx
import React from "react";
import { Container, Typography, List, ListItem, Button } from "@mui/material";

const CommunityPage = () => {
  return (
    <Container maxWidth="md" className="my-10">
      <Typography variant="h4" gutterBottom>
        Community and Forums
      </Typography>
      {/* List of forum threads */}
      <List>
        {/* Render list of forum threads */}
        {/* Example: */}
        <ListItem>
          <Typography variant="h6" gutterBottom>
            Forum Thread Title
          </Typography>
          <Typography variant="body1">
            Description of the forum thread.
          </Typography>
          <Button variant="outlined" color="primary" className="mt-3">
            View Thread
          </Button>
        </ListItem>
        {/* Add more forum threads */}
      </List>
    </Container>
  );
};

export default CommunityPage;
