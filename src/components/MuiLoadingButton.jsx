import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";

const MuiLoadingButton = () => {
  return (
    <Stack
      spacing={6}
      direction={"column"}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <LoadingButton variant="contained" loading={false}>
          Submit
        </LoadingButton>
        <LoadingButton variant="outlined" loading>
          Submit
        </LoadingButton>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <LoadingButton variant="outlined" loadingIndicator="Loading...">
          Fetch data
        </LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
          Fetch data
        </LoadingButton>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          loading
        >
          Save
        </LoadingButton>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <LoadingButton
          variant="outlined"
          loadingPosition="end"
          endIcon={<ShareIcon />}
        >
          Share
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loadingPosition="end"
          endIcon={<ShareIcon />}
          loading
        >
          Share
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default MuiLoadingButton;
