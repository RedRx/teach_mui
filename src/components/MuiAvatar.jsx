import { Stack, Avatar, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light", padding: 1 }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "error.light", padding: 1, fontWeight: "bold" }}>
          BE
        </Avatar>
        <Avatar>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={5}>
        <Avatar
          src="https://randomuser.me/api/portraits/women/99.jpg"
          alt="Jane Doe"
          sx={{
            scale: "1.2",
          }}
        />

        <Avatar
          src="https://randomuser.me/api/portraits/men/99.jpg"
          alt="John Doe"
          sx={{
            scale: "1.2",
          }}
        />

        <Avatar
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Jane Doe"
          sx={{
            scale: "1.5",
          }}
        />

        <Avatar
          src="https://randomuser.me/api/portraits/men/90.jpg"
          alt="John Doe"
          sx={{
            scale: "2",
          }}
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "error.light", fontWeight: "bold" }}>
            CK
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "error.light", fontWeight: "bold" }}>
            CK
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 78, height: 78 }}
        >
          BW
        </Avatar>
        <Avatar
          sx={{
            bgcolor: "error.light",
            width: 78,
            height: 78,
            fontWeight: "bold",
          }}
        >
          BE
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: "error.light",
            width: 78,
            height: 78,
            fontWeight: "bold",
          }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
