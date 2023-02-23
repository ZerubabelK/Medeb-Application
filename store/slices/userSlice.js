import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  user: null,
  isLogged: false,
  verificationPending: false,
};
const baseURL = 'http://192.168.42.249:8000/api';
export const signup = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signup`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post(baseURL + '/auth/login', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const resentOTP = createAsyncThunk(
  'user/resendOTP',
  async (userId, thunkAPI) => {
    try {
      console.log(userId);
      const response = await axios.get(baseURL + '/auth/resendOTP/' + userId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const verifyUser = createAsyncThunk(
  'user/verifyUser',
  async ({token, id}, thunkAPI) => {
    try {
      const response = await axios.post(baseURL + `/auth/confirmCode/${id}`, {
        pin: token,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.isLogged = false;
      state.user = null;
      state.verificationPending = false;
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      console.log('fiul');
      state.user = action.payload;
      state.verificationPending = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    [verifyUser.fulfilled]: (state, action) => {
      state.isLogged = true;
      state.verificationPending = false;
    },
  },
});
export const {logout} = userSlice.actions;
export default userSlice.reducer;
