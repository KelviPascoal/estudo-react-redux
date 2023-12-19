import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./slices/pokemonSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ToDoReducer } from "./slices/toDoSlice";
// ...

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    toDo: ToDoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
