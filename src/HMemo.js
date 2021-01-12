import React, { useState, useMemo } from "react";
import "./App.css";

// helper
const createArray = (length) => {
  let i = length;
  const arr = [];
  while (i--) {
    arr[i] = 0;
  }

  return arr;
};

const expensiveCalc = (myArray) => {
  console.log("expensiveCalc ejecutado");
  let c = 0;
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      c = c + 1;
    }
  }

  return c;
};

const MyComponent = ({ someList }) => {
  const result = useMemo(() => expensiveCalc(someList), [someList]);

  return <p>Iteraciones: {result.toLocaleString()}</p>;
};

const list = createArray(10000);

export default function HMemo() {
  const [foo, setFoo] = useState("");
  const handleChange = ({ target }) => setFoo(target.value);
  return (
    <div className="App">
      <h1>useMemo - Aplicado</h1>
      <p>Escribe para hacer re render.</p>
      <input value={foo} onChange={handleChange} />
      <p>Mira la consola de codesandbox (no la de tu navegador).</p>
      <MyComponent someList={list} />
    </div>
  );
}
