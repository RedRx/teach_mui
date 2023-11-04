import { Snackbar, Button, Alert, Box } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlertOutline = forwardRef(function SnackAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="outlined" {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClose2 = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen2(false);
  };

  const handleClose3 = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen3(false);
  };

  return (
    <>
      <Box flexDirection={"column"} display="flex" gap={2}>
        <Button onClick={() => setOpen(true)}>Snackbar default</Button>
        <Button onClick={() => setOpen2(true)}>
          Custom Snackbar with Alert
        </Button>
        <Button onClick={() => setOpen3(true)}>
          Custom Snackbar with Alert outlined
        </Button>
      </Box>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
      <Snackbar
        open={open2}
        autoHideDuration={4000}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SnackbarAlert onClose={handleClose2} severity="success">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>

      <Snackbar
        open={open3}
        autoHideDuration={4000}
        onClose={handleClose3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarAlertOutline onClose={handleClose3} severity="error">
          Form submitted failed
        </SnackbarAlertOutline>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
