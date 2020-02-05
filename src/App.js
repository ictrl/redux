import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, auth } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      <h1>Counter Value = {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>

      <button onClick={() => dispatch(auth())}>AUTH</button>
      {isLogged ? <h3>Secrets</h3> : ""}
    </div>
  );
}

export default App;
