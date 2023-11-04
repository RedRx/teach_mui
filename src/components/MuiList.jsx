import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Stack,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Stack spacing={3}>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List style={{ color: "black" }}>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 1"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 2"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="List item 3"></ListItemText>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List style={{ color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary="List item 1 button"
                secondary="Secondary text"
              ></ListItemText>
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 2"
              secondary="Secondary text"
            ></ListItemText>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 3"
              secondary="Secondary text"
            ></ListItemText>
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};

export default MuiList;
