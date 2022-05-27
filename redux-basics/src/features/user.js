import { createSlice } from "@reduxjs/toolkit";

export  const userSLice = createSlice({
  name: "user",
  initialState: {
    value: [
     
    ],
  },
  reducers: {
    login: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { login } = userSLice.actions;
export default userSLice.reducer;