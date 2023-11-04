import { Typography } from "@mui/material";
import { login, logout } from "../utils/Redux/UserSlice";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function handleLogin() {
    dispatch(
      login({
        isLogin: true,
        token: "123",
        firstName: "Beary",
        lastName: "Dev",
        userID: "123",
      })
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <Typography variant="h5">Material UI Demo</Typography>
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.userID}</p>
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Main;
