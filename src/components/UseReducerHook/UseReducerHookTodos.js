import { React, useEffect, useState, useReducer } from "react";
import Todo from "../Todo/Todo";

// https://www.youtube.com/watch?v=kK_Wqx3RnHk&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=6

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

export default function UseReducerHookTodos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    setName((prevName) => {
      return {
        ...prevName,
        [name]: value,
      };
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          //   onChange={(e) => setName(e.target.value)}
          onChange={handleChange}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
