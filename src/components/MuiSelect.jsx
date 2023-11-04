import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  console.log({ country });
  console.log({ countries });

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  // NOTE: Split method will return a new Array and cut specific characters from the string
  //
  // const str = "Hello World! How are you?";
  // const strArray = str.split(" "); // splits the string at each space character
  // console.log(strArray); // ["Hello", "World!", "How", "are", "you?"]
  //
  // const str2 = "apple,banana,grape";
  // const fruitArray = str2.split(","); // splits the string at each comma
  // console.log(fruitArray); // ["apple", "banana", "grape"]
  //
  // const str3 = "123456789";
  // const limitedArray = str3.split("", 3); // splits the string at each character, but only includes the first 3 splits
  // console.log(limitedArray); // ["1", "2", "3"]

  return (
    <Stack
      direction="column"
      spacing={2}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
      }}
    >
      <Box width="250px">
        {/* NOTE: Add select prop to use dropdown selected */}
        <TextField
          label="Select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
          size="small"
          color="secondary"
          helperText="Please select your country"
        >
          <MenuItem value="TH">Thai</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        {/* NOTE: Add select prop to use dropdown selected */}
        <TextField
          label="Select countries"
          select
          value={countries}
          onChange={handleChangeMultiple}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="warning"
          helperText="Please select your countries"
        >
          <MenuItem value="TH">Thai</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
