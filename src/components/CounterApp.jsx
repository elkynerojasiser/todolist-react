import { useState } from 'react';

export const CounterApp = () => {
    const [counter,setCounter] = useState(1)
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-6 d-flex align-items-center">
            <h3>Contador: {counter}</h3>
            <button className="btn btn-primary"> - 1</button>
            <button className="btn btn-primary">+ 1</button>
            <button className="btn btn-primary">Resetear</button>
          </div>
        </div>
      </div>
    </> );
};
