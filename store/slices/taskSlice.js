import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {act} from 'react-test-renderer';

const initialState = {
  cachedTask: {subtasks: []},
  allTasks: [],
};

const baseURL = 'http://192.168.42.249:8000/api';
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
export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async ({taskId, token}, thunkAPI) => {
    try {
      const response = await axios.delete(baseURL + '/tasks/' + taskId, {
        headers: {Authorization: token},
      });
      if (response) fetchTasks(token);
      return {taskId};
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const changeStatusOfSubtask = createAsyncThunk(
  'tasks/changeStatusOfSubtask',
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
      return {taskId, subtaskId, value};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const taskSLice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCachedTask: (state, {payload}) => {
      state.cachedTask = payload;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) =>
      void (state.allTasks = [...action.payload.tasks]),
    [addTask.fulfilled]: (state, action) => {
      let newTasks = state.allTasks;
      newTasks.push(action.payload.task);
      state.allTasks = [...newTasks];
      return undefined;
    },
    [changeStatusOfSubtask.fulfilled]: (state, action) => {
      let index = state.allTasks.findIndex(
        task => task._id == action.payload.taskId,
      );
      if (index >= 0) {
        let i = state.allTasks[index].subtasks.findIndex(
          subtask => subtask._id == action.payload.subtaskId,
        );
        if (i >= 0) {
          state.allTasks[index].subtasks[i].done = action.payload.value;
        }
      }
      return undefined;
    },
    [removeTask.fulfilled]: (state, action) => {
      console.log(action);
      state.allTasks = state.addTask.filter(
        task => task._id != action.payload.taskId,
      );
      return undefined;
    },
  },
});

export const {setCachedTask} = taskSLice.actions;
export default taskSLice.reducer;
