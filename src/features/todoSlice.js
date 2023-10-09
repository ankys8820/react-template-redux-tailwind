import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: Date(), text: "new Text" }];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
