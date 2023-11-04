import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Stack spacing={4} direction="row">
      <Box width="400px">
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="https://source.unsplash.com/random/?fruit"
            alt="unsplash images"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React.JS
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              React is a JavaScript library for building user interfaces. React
              van be used as a base in the development of single-page or mobule
              applications. React lets you build user interfaces out of
              individual pieces called components.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Box>

      <Box width="400px">
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="https://source.unsplash.com/random/?city,night"
            alt="unsplash images"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Next.JS
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Used by some of the world is largest companies, Next.js enables
              you to create full-stack Web applications by extending the latest
              React features, and integrating powerful Rust-based JavaScript
              tooling for the fastest builds.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
};

export default MuiCard;
