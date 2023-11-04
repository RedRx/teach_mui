import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        onChange={(_e, newValue) => setValue(newValue)}
        value={value}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>

      <BottomNavigation
        onChange={(_e, newValue) => setValue(newValue)}
        value={value}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Stack>
  );
};

export default MuiBottomNavigation;
