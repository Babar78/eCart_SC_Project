import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "./API/userAPI";

// Async thunk to fetch user data from the database
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetchUserData(); // Assuming you have an API function to fetch user data
  return response.data; // Modify this according to your API response structure
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user.data;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
