import { React, useEffect, useState, useReducer } from "react";

export default function UseReducerHook() {
  const initialState = {
    options: [
      { id: 1, name: "First", value: 10 },
      { id: 2, name: "Second", value: 50 },
      { id: 3, name: "Third", value: 200 },
    ],
    quantity: 1,
    selected: 1,
  };

  function reduceButtonStates(state) {
    return {
      ...state,
      decrementDisabled: state.quantity === 0,
      incrementDisabled: state.quantity === 10,
    };
  }

  function calculateTotal(state) {
    const option = state.options.find((option) => option.id === state.selected);
    return { ...state, total: state.quantity * option.value };
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "init":
        newState = calculateTotal(state);
        return reduceButtonStates(newState);
      case "decrementQuantity":
        newState = { ...state, quantity: state.quantity - 1 };
        newState = calculateTotal(newState);
        return reduceButtonStates(newState);
      case "incrementQuantity":
        newState = { ...state, quantity: state.quantity + 1 };
        newState = calculateTotal(newState);
        return reduceButtonStates(newState);
      case "selectItem":
        newState = { ...state, selected: Number(action.id) };
        return calculateTotal(newState);
      default:
        throw new Error(`${action.type} is not a valid action`);
    }
  }

  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  return (
    <div>
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </section>
      <section>
        <strong>Total: {total}</strong>
      </section>
    </div>
  );
}
