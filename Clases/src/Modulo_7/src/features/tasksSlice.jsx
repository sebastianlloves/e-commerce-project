import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addNewTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(taskContent) {
        return {
          payload: {
            content: taskContent,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask: (state, action) => {
      return current(state).filter((task) => task.id !== action.payload);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addNewTask, deleteTask } = tasksSlice.actions;
