import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState(null);
  const handleFormatChange = (_event, updatedFormats) =>
    setFormats(updatedFormats);

  const [multipleFormats, setMultipleFormats] = useState([]);
  const handleMultipleFormatChange = (_event, updatedMultipleFormats) =>
    setMultipleFormats(updatedMultipleFormats);

  console.log({ formats });
  console.log({ multipleFormats });

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        {/* NOTE: Ripple is a effect when click */}
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        {/* NOTE: Elevation is shadow */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <Button variant="contained">Left</Button>
        <Button variant="contained">Center</Button>
        <Button variant="contained">Right</Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" aria-label="alignment button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined" color="error">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        {/* NOTE: exclusive is meaning can select only one */}
        <Stack bgcolor={"#d9d9d9"}>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatChange}
            size="small"
            color="error"
            orientation="vertical"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>

            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>

            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <div style={{ padding: "1rem" }} />
        <Stack bgcolor={"#d9d9d9"}>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={multipleFormats}
            onChange={handleMultipleFormatChange}
            size="small"
            color="warning"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>

            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>

            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">
          Formats : {JSON.stringify(formats)}
        </Typography>
        <br />
        <Typography variant="h5">
          MultipleFormats : {JSON.stringify(multipleFormats)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
