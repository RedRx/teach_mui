import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2} width={400} style={{ textAlign: "start" }}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        Error alert with close button
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        Info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        Success alert with action button
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        Success alert change icon
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
