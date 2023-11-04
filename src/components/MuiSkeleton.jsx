import { Stack, Skeleton } from "@mui/material";

const MuiSkeleton = () => {
  return (
    <Stack
      direction={"column"}
      spacing={3}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Stack spacing={1} width="250px">
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={250} height={125} />
      </Stack>

      <Stack spacing={1} width="250px">
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="wave"
        />
      </Stack>

      <Stack spacing={1} width="250px">
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" width={40} height={40} animation={false} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation={false}
        />
      </Stack>
    </Stack>
  );
};

export default MuiSkeleton;
