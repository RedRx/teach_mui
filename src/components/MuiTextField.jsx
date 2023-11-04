import { InputAdornment, Stack, TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [text, setText] = useState("");

  return (
    <Stack
      spacing={4}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small secoundary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          color="warning"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setTouched(true);
          }}
          error={!value && touched}
          helperText={
            !value ? "Required" : "Do not share you password with anyone"
          }
          required
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share you password with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share you password with anyone"
          disabled
        />
        <TextField label="ReadOnly" inputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* WARN: MUI have not onBlur event */}
      <input
        style={{
          backgroundColor: "transparent",
          border: "0.5px solid #a1a1a1",
          borderRadius: "5px",
          padding: "0.5rem",
        }}
        type="text"
        value={text}
        placeholder="Test onBlur"
        onChange={(e) => setText(e.target.value)}
        onBlur={() => alert("Input field lost focus")}
      />
    </Stack>
  );
};

export default MuiTextField;
