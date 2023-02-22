import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {act} from 'react-test-renderer';

const initialState = {
  cachedTask: {subtasks: []},
  allTasks: [],
};

const baseURL = 'http://192.168.43.70:8000/api';
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({task, token}, thunkAPI) => {
    console.log(task, token);
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
export const changeStatusOfSubtask = createAsyncThunk(
  'user/changeStatusOfSubtask',
  async ({taskId, subtaskId, value, token}, thunkAPI) => {
    try {
      const response = await axios.put(
        baseURL + `/tasks/subtask/${subtaskId}`,
        {
          value,
          taskId,
        },
        {
          headers: {Authorization: token},
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(baseURL + `/tasks`, {
        headers: {Authorization: token},
      });
      fetchTasks();
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
    setCachedTask: (state, {payload}) => {
      state.cachedTask = payload;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.allTasks = action.payload.tasks;
      console.log(state.allTasks);
    },
    [addTask.fulfilled]: (state, action) => {
      return [...state.allTasks, action.payload.task];
    },
    [changeStatusOfSubtask.fulfilled]: (state, action) => {},
  },
});

export const {setCachedTask} = taskSLice.actions;
export default taskSLice.reducer;
