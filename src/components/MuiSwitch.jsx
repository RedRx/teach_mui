import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    // NOTE: indexOf will return 1 when the value is found in the array
    //        and -1 when the value is not found in the array at all
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      // NOTE: filter will remove the value from the array if it is found in the array
      //        and will add the value to the array if it is not found in the array
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
          label="Dark mode"
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills Row</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              control={
                <Switch
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="css"
              control={
                <Switch
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="javaScript"
              control={
                <Switch
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>

      <Box margin={2}>LOG : {JSON.stringify({ checked })}</Box>
      <Box margin={2}>LOG : {JSON.stringify({ skills })}</Box>
    </Box>
  );
};

export default MuiSwitch;
