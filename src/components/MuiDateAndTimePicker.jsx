import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Stack, Box } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MuiDateAndTimePicker = () => {
  const [value, setValue] = useState(dayjs());
  const [value2, setValue2] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction={"column"}
        spacing={2}
        style={{
          backgroundColor: "#eee",
          padding: "2rem",
          borderRadius: "15px",
          color: "black",
        }}
      >
        <Stack>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Date Uncontrolled picker"
              defaultValue={dayjs("2022-04-17")}
            />
            <DatePicker
              label="Date Controlled picker"
              value={value2}
              onChange={(newValue) => setValue2(newValue)}
            />
          </DemoContainer>
        </Stack>
        <Stack spacing={3}>
          {JSON.stringify({ DateControllerPicker: value2 })}
        </Stack>
        <Stack>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker label="Datetime Picker" />
          </DemoContainer>
        </Stack>

        <Stack>
          <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
            <DateTimePicker
              label="Uncontrolled picker"
              defaultValue={dayjs()}
            />
            <DateTimePicker
              label="Controlled picker"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </Stack>
        <Box m={4}>{JSON.stringify({ ControllerPicker: value })}</Box>

        <Stack spacing={2} my={3}>
          <DemoContainer
            components={[
              "DateTimePicker",
              "MobileDateTimePicker",
              "DesktopDateTimePicker",
              "StaticDateTimePicker",
            ]}
          >
            <DemoItem label="Desktop variant">
              <DesktopDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem>
            <DemoItem label="Mobile variant">
              <MobileDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem>
            <DemoItem label="Responsive variant">
              <DateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem>
            <DemoItem label="Static variant">
              <StaticDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem>
          </DemoContainer>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default MuiDateAndTimePicker;
