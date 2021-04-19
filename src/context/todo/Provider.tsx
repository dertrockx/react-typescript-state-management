import React, { FC, ReactNode, useReducer, Reducer } from "react";

import TodosContext, {
  ITodo,
  initialState,
  InitialStateType,
} from "./todoContext";
import todoReducer, { ActionEnums, ActionType } from "./reducers";

const TodosProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<InitialStateType, ActionType>>(
    todoReducer,
    initialState
  );

  const addTodo = (todo: ITodo) =>
    dispatch({
      type: ActionEnums.ADD_TODO,
      payload: todo,
    });

  const deleteTodo = (id: string) =>
    dispatch({
      type: ActionEnums.DELETE_TODO,
      payload: id,
    });

  const toggleTodo = (id: string) =>
    dispatch({ type: ActionEnums.TOGGLE_TODO, payload: id });
  return (
    <TodosContext.Provider
      value={{ ...state, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
