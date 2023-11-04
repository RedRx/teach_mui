import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Stack } from "@mui/material";

const MuiTimeline = () => {
  return (
    <Stack
      width={500}
      spacing={1}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>City D</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>City D</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>City D</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
};

export default MuiTimeline;
