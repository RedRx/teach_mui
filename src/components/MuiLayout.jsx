import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

// NOTE: Devider is | for seperate

const MuiLayout = () => {
  // NOTE: Box can everything be a component props
  //      Default when use will div tag
  //      use because Box will accept `sx` props for custom styles in MUI
  //
  return (
    // elevation is shadow
    <>
      <Stack display="flex" flexDirection="column" spacing={2}>
        <Stack
          sx={{
            outline: "1px solid ",
            padding: "1rem",
          }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "100px",
              width: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            MuiLayout
          </Box>

          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light" //color by themes.palette
            p={2} // padding, default is multiply by 8px, p={2} is 16px
          ></Box>
        </Stack>
        {/* NOTE: Grid
               The Grid component unser the hood uses the flexbox module
               The Grid consists of 12 columns in screen, 6 is meaning half of grid screen
               Grid 3 = 25%, Grid 6 = 50%, Grid 9 = 75%, Grid 12 = 100%
               Each item in the grid can take up one or more columns as its width
               There are five breakpoints each corresponding to a certain device width
               `xs` for mobile device size, `sm` for tablet, `md` for desktop, `lg` and `xl` for larger monitors

               WARN: We can assign integer values to each breakpoint which indicates how many of the 12 avaliable
               columns are occupied by that item when the viewport satisfies that breakpoint constraints
          */}
        <br />
        <br />
        GRID
        <br />
        <br />
        <Grid container my={4}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4} spacing={1}>
          <Grid item xs={3}>
            <Box bgcolor="secondary.light" p={2}>
              25%
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="secondary.dark" p={2}>
              75%
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="secondary.light" p={2}>
              75%
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="secondary.dark" p={2}>
              25%
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor="error.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="error.dark" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="error.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="error.dark" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Paper
          sx={{ width: "500px", height: "300px", padding: "1rem" }}
          elevation={4}
        >
          This is Papaer component of MUI
        </Paper>
      </Stack>
    </>
  );
};

export default MuiLayout;
