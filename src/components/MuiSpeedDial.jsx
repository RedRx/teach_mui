import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
} from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";

const MuiSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Backdrop aria-label="Backdrop" open={open} />
      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FileCopyOutlinedIcon />} tooltipTitle="Copy" />
        <SpeedDialAction
          icon={<LocalPrintshopOutlinedIcon />}
          tooltipTitle="Print"
        />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>

      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 100,
        }}
        icon={<SpeedDialIcon />}
        direction="left"
        FabProps={{
          sx: {
            bgcolor: "secondary.main",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          },
        }}
      >
        <SpeedDialAction icon={<FileCopyOutlinedIcon />} tooltipTitle="Copy" />
        <SpeedDialAction
          icon={<LocalPrintshopOutlinedIcon />}
          tooltipTitle="Print"
        />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>

      <Stack direction={"row"} spacing={4}>
        <SpeedDial
          ariaLabel="Navigation speed dial"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          FabProps={{
            sx: {
              bgcolor: "orange",
              color: "#000",
              "&:hover": {
                bgcolor: "#000",
                color: "orange",
              },
            },
          }}
        >
          <SpeedDialAction
            icon={<FileCopyOutlinedIcon />}
            tooltipTitle="Copy"
            FabProps={{
              sx: {
                bgcolor: "orange",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "orange",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<LocalPrintshopOutlinedIcon />}
            tooltipTitle="Print"
            FabProps={{
              sx: {
                bgcolor: "orange",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "orange",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            FabProps={{
              sx: {
                bgcolor: "orange",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "orange",
                },
              },
            }}
          />
        </SpeedDial>

        <SpeedDial
          ariaLabel="Navigation speed dial"
          icon={<SpeedDialIcon />}
          FabProps={{
            sx: {
              bgcolor: "darkslateblue",
              color: "#fff",
              "&:hover": {
                bgcolor: "#fff",
                color: "darkslateblue",
              },
            },
          }}
        >
          <SpeedDialAction
            icon={<FileCopyOutlinedIcon />}
            tooltipTitle="Copy"
            tooltipOpen
            FabProps={{
              sx: {
                bgcolor: "darkslateblue",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "darkslateblue",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<LocalPrintshopOutlinedIcon />}
            tooltipTitle="Print"
            tooltipOpen
            FabProps={{
              sx: {
                bgcolor: "darkslateblue",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "darkslateblue",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            tooltipOpen
            FabProps={{
              sx: {
                bgcolor: "darkslateblue",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "darkslateblue",
                },
              },
            }}
          />
        </SpeedDial>

        <SpeedDial
          ariaLabel="Navigation speed dial"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          FabProps={{
            sx: {
              bgcolor: "darkturquoise",
              color: "#000",
              "&:hover": {
                bgcolor: "#000",
                color: "darkturquoise",
              },
            },
          }}
        >
          <SpeedDialAction
            icon={<FileCopyOutlinedIcon />}
            tooltipTitle="Copy"
            FabProps={{
              sx: {
                bgcolor: "darkturquoise",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "darkturquoise",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<LocalPrintshopOutlinedIcon />}
            tooltipTitle="Print"
            FabProps={{
              sx: {
                bgcolor: "darkturquoise",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "darkturquoise",
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            FabProps={{
              sx: {
                bgcolor: "darkturquoise",
                color: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  color: "darkturquoise",
                },
              },
            }}
          />
        </SpeedDial>

        <SpeedDial
          ariaLabel="Navigation speed dial"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          direction="down"
        >
          <SpeedDialAction
            icon={<FileCopyOutlinedIcon />}
            tooltipTitle="Copy"
            tooltipOpen
          />
          <SpeedDialAction
            icon={<LocalPrintshopOutlinedIcon />}
            tooltipTitle="Print"
            tooltipOpen
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            tooltipOpen
          />
        </SpeedDial>

        <SpeedDial
          ariaLabel="Navigation speed dial"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <SpeedDialAction
            icon={<FileCopyOutlinedIcon />}
            tooltipTitle="Copy"
          />
          <SpeedDialAction
            icon={<LocalPrintshopOutlinedIcon />}
            tooltipTitle="Print"
          />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        </SpeedDial>
      </Stack>
    </>
  );
};

export default MuiSpeedDial;
