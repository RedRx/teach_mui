import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="body2">
        Primary Color
      </Link>

      <Typography variant="h3">
        <Link href="#" color={"secondary"}>
          Secondary Color
        </Link>
      </Typography>

      <Typography variant="h5">
        <Link href="#" color={"error"} underline="hover">
          Underline Hover
        </Link>
      </Typography>

      <Typography variant="h6">
        <Link href="#" color={"darkcyan"} underline="none">
          Underline None
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
