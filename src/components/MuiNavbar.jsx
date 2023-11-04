import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const MuiNavbar = () => {
  return (
    <>
      <AppBar>
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
      <Stack direction={"column"}>
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
        <AppBar color="transparent" sx={{ marginTop: 5 }} position="static">
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
        <AppBar color="secondary" sx={{ marginTop: 5 }} position="static">
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
        <AppBar
          sx={{
            marginTop: 5,
            backgroundColor: "darkorange",
            color: "#14141f",
            borderRadius: "10px",
          }}
          position="static"
        >
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
        <AppBar
          sx={{
            marginTop: 5,
            backgroundColor: "#14141f",
            color: "#fff",
            borderRadius: "10px",
          }}
          position="static"
        >
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
        <AppBar
          sx={{
            marginTop: 5,
            backgroundColor: "teal",
            color: "#eee",
            borderRadius: "10px",
          }}
          position="static"
        >
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
      </Stack>
    </>
  );
};

export default MuiNavbar;
