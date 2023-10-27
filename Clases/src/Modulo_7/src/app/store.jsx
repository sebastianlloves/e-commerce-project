import { configureStore } from "@reduxjs/toolkit";
import { articlesReducer } from "../features/articlesSlice";
import { tasksReducer } from "../features/tasksSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    tasks: tasksReducer,
  },
});
