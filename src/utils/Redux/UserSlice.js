import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: undefined,
  firstName: undefined,
  lastName: undefined,
  userID: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { isLogin, token, firstName, lastName, userID } = action.payload;
      state.isLogin = isLogin;
      state.token = token;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userID = userID;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = undefined;
      state.firstName = undefined;
      state.lastName = undefined;
      state.userID = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
