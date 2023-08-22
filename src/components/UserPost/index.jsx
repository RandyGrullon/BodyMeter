// components/UserPost.jsx
import React from "react";
import { ListItem, Typography } from "@mui/material";

const UserPost = ({ username, content }) => {
  return (
    <ListItem>
      <Typography variant="body2" gutterBottom>
        {username}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </ListItem>
  );
};

export default UserPost;
