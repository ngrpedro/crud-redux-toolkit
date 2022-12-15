import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: {},
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("http://localhost:3000/users").then((resp) => resp.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
