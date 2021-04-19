import { createContext } from "react";

export interface ITodo {
  id: string;
  description: string;
  done: boolean;
}

export interface InitialStateType {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
export const initialState: InitialStateType = {
  todos: [],
  addTodo: (todo: ITodo) => {},
  deleteTodo: (id: string) => {},
  toggleTodo: (id: string) => {},
};

const TodosContext = createContext<InitialStateType>(initialState);

export default TodosContext;
