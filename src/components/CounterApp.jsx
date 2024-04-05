import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterApp = ( {counterModifier, allowNegative} ) => {
  const { counter, increment, decrement, reset } = useCounter({counterModifier, allowNegative })
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
