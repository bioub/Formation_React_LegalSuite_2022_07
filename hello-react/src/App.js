import React from 'react';
import Hello from './Hello';
import ReactSelect from 'react-select';
import Clock from './Clock';
import LikeButton from './LikeButton';
import ExHelloworld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Select from './Select';

function App() {
  console.log('App called');
  const name = 'Romain';
  return (
    <div className="App">
      <h2>
        Hello et React-Select (hello world, introducing jsx, component and
        props)
      </h2>
      <Hello />
      <Hello name="Romain" age={36} />
      <Hello name={name} />
      {React.createElement(Hello, { name: 'Romain' })}
      <ReactSelect options={[{ label: 'ABC', value: 'abc' }]} />
      <h2>Clock (state, lifecycle)</h2>
      <Clock />

      {/* Composant non-controllé (le state est dans LikeButton) */}
      <LikeButton />

      {/* Composant controllé (le state est dans App et passé à LikeButton via une prop) */}
      {/* <LikeButton count={count} /> */}

      <h2>Exercices</h2>
      <ExHelloworld />
      <ExMultiStateButton items={['Romain', 'Jean', 'Eric']} />

      <h2>Select (conditional rendering, list and keys)</h2>
      <Select
        options={[
          { value: 'Romain', label: 'Romain' },
          { value: 'Jean', label: 'Jean' },
          { value: 'Eric', label: 'Eric' },
        ]}
      />
    </div>
  );
}

export default App;
