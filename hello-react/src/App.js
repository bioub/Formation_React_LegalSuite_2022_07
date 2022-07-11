import React from "react";
import Hello from "./Hello";
import Select from 'react-select';
import Clock from "./Clock";

function App() {
  console.log('App called');
  const name = "Romain";
  return (
    <div className="App">
      <h2>Hello et React-Select (hello world, introducing jsx, component and props)</h2>
      <Hello />
      <Hello name="Romain" age={36} />
      <Hello name={name} />
      {React.createElement(Hello, { name: 'Romain' })}
      <Select options={[{label: 'ABC', value: 'abc'}]} />
      <h2>Clock (state, lifecycle)</h2>
      <Clock />
    </div>
  );
}

export default App;
