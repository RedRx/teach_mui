import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const MuiSkeletonDemo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Stack spacing={2}>
      <Box my={5}>
        <Typography>Wait for 5 sec</Typography>
      </Box>
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={400}
            height={300}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/400×300/?fruit"
            alt="Skeleton"
            width={400}
            height={300}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React MUI Tutorial</Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default MuiSkeletonDemo;
