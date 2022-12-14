import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Pedro", email: "pedro@gmail.com" },
  { id: "2", name: "Paula", email: "paula@gmail.com" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
