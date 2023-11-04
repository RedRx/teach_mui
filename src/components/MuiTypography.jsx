import { Box, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Body1 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
        sint cillum sint consectetur cupidatat.
      </Typography>
      <Typography>
        Body1 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
        sint cillum sint consectetur cupidatat.
      </Typography>
      <Typography variant="body2">
        Body 2 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
        sint cillum sint consectetur cupidatat.
      </Typography>

      <Typography variant="button">Button</Typography>
    </Box>
  );
};

export default MuiTypography;
