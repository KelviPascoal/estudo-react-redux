import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ToDo = {
  id: string;
  description: string;
  isDone: boolean;
};

type ToDoState = {
  toDo: ToDo[];
};

const initialState: ToDoState = {
  toDo: [],
};

const toDoSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.toDo.push(action.payload);
    },
    toggleToDo: (state, action: PayloadAction<Pick<ToDo, "id">>) => {
      const toDoIndex = state.toDo.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDo[toDoIndex].isDone = !state.toDo[toDoIndex].isDone;
    },
  },
});

export const { addToDo, toggleToDo } = toDoSlice.actions;

export const ToDoReducer = toDoSlice.reducer;
