import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BookmarkBorder } from "@mui/icons-material";

const MuiCheckbox = () => {
  const [check, setCheck] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setCheck(e.target.checked);
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
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={check}
              onChange={handleChange}
              size="small"
              color="secondary"
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<BookmarkIcon />}
          checked={check}
          onChange={handleChange}
        />{" "}
        Icon Checkbox
      </Box>
      <br />
      <br />
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="html"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="javaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
      <br />
      <br />
      <Box>
        <FormControl error>
          <FormLabel>Skills Row</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="javaScript"
              control={
                <Checkbox
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

      <br />
      {JSON.stringify({ accept: check })}
      <br />
      {JSON.stringify({ skills: skills })}
    </Box>
  );
};

export default MuiCheckbox;
