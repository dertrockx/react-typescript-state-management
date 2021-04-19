import React, { ReactElement, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { ITodo } from "../context/todo";
import { TodosContext } from "../context/todo";

export interface TodoConsumerProps {}

export default function TodoConsumer(
  props: TodoConsumerProps
): ReactElement | null {
  const { todos, addTodo, deleteTodo, toggleTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState<ITodo>({
    id: "",
    description: "",
    done: false,
  });
  const add = () => {
    addTodo({
      ...newTodo,
      id: uuid(),
    });
    setNewTodo({
      id: "",
      description: "",
      done: false,
    });
  };
  return (
    <>
      <h1>React + Typescript + Reducers + Context state management</h1>
      <input
        type="text"
        value={newTodo.description}
        name="description"
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <button onClick={add}>Add Todo</button>
      <div style={{ textAlign: "left" }}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              ID: {todo.id} | Description: {todo.description} | Status:{" "}
              {todo.done ? "Done" : "Not Done"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
