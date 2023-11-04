import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-lebel="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width={"350px"} textAlign={"center"} role={"presentation"}>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
        <Box mx={3} my={1}>
          <Typography variant="h6">Menu 1</Typography>
        </Box>
        <Box mx={3} my={1}>
          <Typography variant="h6">Menu 2</Typography>
        </Box>
        <Box mx={3} my={1}>
          <Typography variant="h6">Menu 3</Typography>
        </Box>
        <Box mx={3} my={1}>
          <Typography variant="h6">Menu 4</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
