import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={5} direction="row">
      <Badge badgeContent={5} color="error">
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={5} color="primary">
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={5} color="secondary">
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={5} color="warning">
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={0} color="info" showZero>
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={100} color="error" showZero>
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge badgeContent={150} color="error" showZero max={999}>
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge variant="dot" color="primary">
        <MailIcon sx={{ scale: "2" }} />
      </Badge>

      <Badge variant="dot" color="primary" invisible>
        <MailIcon sx={{ scale: "2" }} />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
