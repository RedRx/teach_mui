import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material";

const StyledBoxDanger = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));
const StyledBoxSuccess = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.success,
}));

const MuiResponsives = () => {
  return (
    <Stack spacing={{ xs: 1, md: 2 }} direction={"column"}>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0px or more
            sm: 200, // 600px or more
            md: 300, // 900px or more
            lg: 400, // 1200px or more
            xl: 500, // 1536px or more
          },
          bgcolor: "primary.main",
          transition: "0.3s ease-in-out",
        }}
      />
      Test with custom theme provide
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0px or more
            sm: 200, // 600px or more
            md: 300, // 900px or more
            lg: 400, // 1200px or more
            xl: 500, // 1536px or more
          },
          bgcolor: "secondary.main",
          transition: "0.3s ease-in-out",
        }}
      />
      main
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0px or more
            sm: 200, // 600px or more
            md: 300, // 900px or more
            lg: 400, // 1200px or more
            xl: 500, // 1536px or more
          },
          bgcolor: "secondary.light",
          transition: "0.3s ease-in-out",
        }}
      />
      light
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0px or more
            sm: 200, // 600px or more
            md: 300, // 900px or more
            lg: 400, // 1200px or more
            xl: 500, // 1536px or more
          },
          bgcolor: "secondary.dark",
          transition: "0.3s ease-in-out",
        }}
      />
      dark
      <StyledBoxDanger />
      <StyledBoxSuccess />
      <Box>
        <Typography variant="h5">xs : 0px or more</Typography>
        <Typography variant="h5">sm : 600px or more</Typography>
        <Typography variant="h5">md : 900px or more</Typography>
        <Typography variant="h5">lg : 1200px or more</Typography>
        <Typography variant="h5">xl : 1536px or more</Typography>
      </Box>
    </Stack>
  );
};

export default MuiResponsives;
