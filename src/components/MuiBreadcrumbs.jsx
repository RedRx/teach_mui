import {
  AppBar,
  Box,
  Breadcrumbs,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Stack
      direction={"column"}
      spacing={3}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <AppBar position="static" sx={{ width: "1000px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            POKEMONAPP
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumbs">
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumbs" separator="-">
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumbs"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={2}
        >
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={3}
          itemsAfterCollapse={2}
        >
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={3}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover">Home</Link>
          <Link underline="hover">Catalog</Link>
          <Link underline="hover">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
};

export default MuiBreadcrumbs;
