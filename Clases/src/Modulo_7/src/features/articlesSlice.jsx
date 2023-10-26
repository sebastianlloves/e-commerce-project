import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [],
    reducers: {
        addNewArticle: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const articlesReducer = articlesSlice.reducer
export const { addNewArticle } = articlesSlice.actions