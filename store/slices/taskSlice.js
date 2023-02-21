import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cachedTask: {subtasks: []},
  allTasks: [],
};

const baseURL = 'http://192.168.43.70:8000/api';
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({task, token}, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/tasks/add`, task, {
        headers: {Authorization: token},
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// export const removeTask = createAsyncThunk(
//   'user/login',
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.post(baseURL + 'auth/login', user, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
// export const changeStatusOfSubtask = createAsyncThunk(
//   'user/verifyUser',
//   async ({token, id}, thunkAPI) => {
//     try {
//       console.log(token, id);
//       const response = await axios.post(baseURL + `/auth/confirmCode/${id}`, {
//         pin: token,
//       });
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(baseURL + `/tasks`, {
        headers: {Authorization: token},
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const taskSLice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, {payload}) => {
      state.allTasks = state.addTask.filter(task => task.id != payload.id);
    },
    changeStatusOfSubtask: (state, {payload}) => {
      const index = state.allTasks.findIndex(task => task.id == payload.taskId);
      console.log(payload);
      const subtaskIndex = state.allTasks[index].subtasks.findIndex(
        subtask => subtask.id == payload.subtaskId,
      );
      state.allTasks[index].subtasks[subtaskIndex].done = payload.value;
    },
    setCachedTask: (state, {payload}) => {
      state.cachedTask = payload;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.allTasks = action.payload.tasks;
      console.log(action.payload.tasks);
    },
    [addTask.fulfilled]: (state, action) => {
      return [...state.allTasks, action.payload.task];
    },
  },
});

export const {setCachedTask} = taskSLice.actions;
export default taskSLice.reducer;
