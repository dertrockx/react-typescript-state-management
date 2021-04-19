import { Reducer } from "react";
import { ITodo, InitialStateType } from "./todoContext";

export enum ActionEnums {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export type ActionType =
  | { type: ActionEnums.ADD_TODO; payload: ITodo }
  | { type: ActionEnums.DELETE_TODO; payload: string }
  | { type: ActionEnums.TOGGLE_TODO; payload: string };

const reducer: Reducer<InitialStateType, ActionType> = (state, action) => {
  switch (action.type) {
    case ActionEnums.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ActionEnums.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload),
      };
    case ActionEnums.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            done: todo.id === action.payload ? !todo.done : todo.done,
          };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
