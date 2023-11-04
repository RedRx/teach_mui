import { Stack, CircularProgress, Box, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2} width={1000}>
      <Stack
        spacing={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress color="error" />
      </Stack>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="16px"
      >
        <CircularProgress variant="determinate" value={60} /> determinate 60%
      </Box>
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" variant="determinate" value={70} />
      determinate 70%
    </Stack>
  );
};

export default MuiProgress;
