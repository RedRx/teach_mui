import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState([]);
  const [value2, setValue2] = useState(null);
  const [skill, setSkill] = useState(null);

  return (
    <Stack
      spacing={2}
      width="350px"
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Autocomplete
        multiple
        options={skills}
        renderInput={(params) => (
          <TextField {...params} label="Skills multiple with Autocomplete" />
        )}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log({ event });
        }}
        // NOTE: freeSolo props to remove dropdown just typing only
        freeSolo
      />
      <br />
      <br />
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField {...params} label="Skill input with Autocomplete " />
        )}
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
          console.log({ event });
        }}
        // NOTE: freeSolo props to remove dropdown just typing only
        freeSolo
      />
      <br />
      <br />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => (
          <TextField {...params} label="Skill with type and Autocomplete" />
        )}
        value={skill}
        onChange={(event, newValue) => {
          setSkill(newValue);
          console.log({ event });
        }}
      />
      <br />
      <br />
      {JSON.stringify({ multiple: value })}
      <br />
      <br />
      {JSON.stringify({ single: value2 })}
      <br />
      <br />
      {JSON.stringify({ skill: skill })}
    </Stack>
  );
};

export default MuiAutocomplete;
