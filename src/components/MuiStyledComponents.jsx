import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 10,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MuiStyledComponents = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <MyComponent>Style by MUI styled components</MyComponent>
      </Box>
      <Box marginTop={5}>
        {`
const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 10,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
`}
      </Box>
    </Box>
  );
};

export default MuiStyledComponents;
