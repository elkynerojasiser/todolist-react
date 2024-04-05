import { useState } from 'react';

export const CounterApp = ( {counterModifier, allowNegative} ) => {
    const [counter,setCounter] = useState(0)
    const increment = () => {
      setCounter(counter + counterModifier)
    }
    const decrement = () => {
      if(!allowNegative && ((counter - counterModifier) < 0)) {
        return
      }
      setCounter(counter - counterModifier)
    }
    const reset = () => {
      setCounter(0)
    }
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-8 d-flex align-items-center">
            <h3>Contador:  {counter}</h3>
            <button className="btn btn-primary" onClick={decrement}> - {counterModifier}</button>
            <button className="btn btn-primary" onClick={increment}>+ {counterModifier}</button>
            <button className="btn btn-primary" onClick={reset}>Resetear</button>
          </div>
        </div>
      </div>
    </> 
  );
};
