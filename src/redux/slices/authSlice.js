import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async (tokenResponse, { rejectWithValue }) => {
  try {
    // Fetch user info using access token
    const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    });

    const userData = res.data;

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Store token in cookies (expires in 3 hours)
    Cookies.set("authToken", tokenResponse.access_token, { expires: 3 });

    return userData;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      Cookies.remove("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
