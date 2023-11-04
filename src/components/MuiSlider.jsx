import { Stack } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function MuiSlider() {
  const [value, setValue] = useState(30);

  return (
    <Stack direction={"column"} spacing={5} textAlign={"center"}>
      <Slider
        defaultValue={value}
        value={value}
        onChange={(_, newValue) => {
          if (typeof newValue === "number") {
            setValue(newValue);
          } else {
            // newValue is an array
            // Do something with the array
            // For example, you can take the first element
            setValue(newValue[0]);
          }
        }}
        sx={{
          width: 300,
          color: "success.main",
        }}
      />
      {JSON.stringify({ value })}
    </Stack>
  );
}
