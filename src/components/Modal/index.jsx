import React from "react";
import { Modal as MuiModal, Backdrop, Fade, Paper } from "@mui/material";

const Modal = ({ open, onClose, children }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper>
          <div style={{ padding: "1rem" }}>{children}</div>
        </Paper>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
