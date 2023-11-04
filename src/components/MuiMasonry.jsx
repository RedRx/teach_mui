import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import Expanded from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MuiMasonry = () => {
  return (
    <Stack spacing={4}>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Typography variant="h5" my={1}>
          Masonry Layout
        </Typography>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height,
                border: "1px solid",
              }}
            >
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>

      <Box sx={{ width: 500, minHeight: 400 }}>
        <Typography variant="h5" my={1}>
          Masonry Layout with Accordion
        </Typography>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Accordion
              key={index}
              sx={{
                minHeight: height,
              }}
            >
              <AccordionSummary expandIcon={<Expanded />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
};

export default MuiMasonry;
