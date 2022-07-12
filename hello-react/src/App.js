import React, { useState } from 'react';
import Hello from './Hello';
import ReactSelect from 'react-select';
import Clock from './Clock';
import LikeButton from './LikeButton';
import ExHelloworld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Select from './Select';
import UserForm from './UserForm';
import Button from './Button';
import ClockWithControls from './ClockWithControls';

function App() {
  console.log('App called');
  // const name = 'Romain';
  const [name, setName] = useState('Romain');
  const propsHello = {
    name: 'Romain',
    age: 36,
  };
  return (
    <div className="App">
      <h2>
        Hello et React-Select (hello world, introducing jsx, component and
        props)
      </h2>
      <Hello />
      <Hello name="Romain" age={36} />
      <Hello name={name} />
      <Hello {...propsHello} />
      {React.createElement(Hello, { name: 'Romain' })}
      <ReactSelect options={[{ label: 'ABC', value: 'abc' }]} autoFocus isClearable />
      <ReactSelect options={[{ label: 'ABC', value: 'abc' }]} autoFocus={false} isClearable={true} />
      <h2>Clock (state, lifecycle)</h2>
      <Clock />

      {/* Composant non-controllé (le state est dans LikeButton) */}
      <LikeButton />

      {/* Composant controllé (le state est dans App et passé à LikeButton via une prop) */}
      {/* <LikeButton count={count} /> */}

      <h2 className='menu'>Exercices</h2>
      <ExHelloworld />
      <ExMultiStateButton items={['Romain', 'Jean', 'Eric']} />

      <h2>Select (conditional rendering, list and keys)</h2>
      <Select
        selected={name}
        onSelected={(name) => setName(name)}
        options={[
          { value: 'Romain', label: 'Romain' },
          { value: 'Jean', label: 'Jean' },
          { value: 'Eric', label: 'Eric' },
        ]}
      />

      <h2>UserForm (forms)</h2>
      <UserForm />

      <h2>Button (composition vs inheritance)</h2>
      <Button>
        <b>Text</b>
        <b>Text</b>
      </Button>

      <h2>ClockWithControls (composition, lifecycle)</h2>
      <ClockWithControls />
    </div>
  );
}

export default App;
