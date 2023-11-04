import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const [valueHeart, setValueHeart] = useState(null);
  const valueHeartReadOnly = 3;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log({ event });
  };
  const handleChangeHeart = (event, newValue) => {
    setValueHeart(newValue);
    console.log({ event });
  };

  return (
    <Stack
      spacing={2}
      style={{
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "15px",
        color: "black",
      }}
    >
      <Rating
        value={value}
        onChange={handleChange}
        size="large"
        precision={0.5} // NOTE: To use 0.5 ratings
      />
      <br />
      <br />
      <Rating
        value={valueHeart}
        onChange={handleChangeHeart}
        size="large"
        precision={0.5} // NOTE: To use 0.5 ratings
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <br />
      <br />
      <Rating
        value={valueHeartReadOnly}
        size="large"
        precision={0.5} // NOTE: To use 0.5 ratings
        icon={<FavoriteIcon fontSize="inherit" color="info" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
      />
      <br />
      <br />
      <Rating
        value={valueHeartReadOnly}
        size="large"
        precision={0.5} // NOTE: To use 0.5 ratings
        icon={<FavoriteIcon fontSize="inherit" color="success" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
        highlightSelectedOnly
      />
      <br />
      <br />
      {JSON.stringify({ value })}
      <br />
      {JSON.stringify({ valueHeart })}
      <br />
      {JSON.stringify({ valueHeartReadOnly })}
      <br />
      {JSON.stringify({ highlightSelectedOnly: valueHeartReadOnly })}
    </Stack>
  );
};

export default MuiRating;
