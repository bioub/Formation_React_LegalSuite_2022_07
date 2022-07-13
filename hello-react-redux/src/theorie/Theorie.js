import React, { useState } from 'react';
import ReactSelect from 'react-select';
import Hello from './Hello';
import Clock from './Clock';
import LikeButtonUncontrolled, {LikeButtonControlled} from './LikeButton';
import ExHelloworld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Select from './Select';
import UserForm from './UserForm';
import Button from './Button';
import ClockWithControls from './ClockWithControls';
import LikeButtonContainer from './LikeButtonContainer';

function Theorie() {
  console.log('Theorie called');
  // const name = 'Romain';
  const [name, setName] = useState('Romain');
  const propsHello = {
    name: 'Romain',
    age: 36,
  };
  const [count, setCount] = useState(0);
  return (
    <div className="Theorie">
      <h2>
        Hello et React-Select (hello world, introducing jsx, component and
        props)
      </h2>
      <Hello />
      <Hello name="Romain" age={36} />
      <Hello name={name} />
      <Hello {...propsHello} />
      {React.createElement(Hello, { name: 'Romain' })}
      <ReactSelect
        options={[{ label: 'ABC', value: 'abc' }]}
        autoFocus
        isClearable
      />
      <ReactSelect
        options={[{ label: 'ABC', value: 'abc' }]}
        autoFocus={false}
        isClearable={true}
      />
      <h2>Clock (state, lifecycle)</h2>
      <Clock />

      {/* Composant non-controllé (le state est dans LikeButton) */}
      <h2>LikeButton (controlled vs uncontrolled component, lifting state up</h2>
      <LikeButtonUncontrolled />
      <LikeButtonUncontrolled />
      <LikeButtonUncontrolled />

      {/* Composant controllé (le state est dans Theorie et passé à LikeButton via une prop) */}
      <LikeButtonControlled count={count} onIncrement={setCount} />
      <LikeButtonControlled count={count} onIncrement={setCount} />
      <LikeButtonControlled count={count} onIncrement={setCount} />

      {/* Container (composant connecté au store Redux) */}
      <LikeButtonContainer />
      <LikeButtonContainer />
      <LikeButtonContainer />

      <h2 className="menu">Exercices</h2>
      <ExHelloworld />
      <ExMultiStateButton
        items={['Romain', 'Jean', 'Eric']}
        value={name}
        onSelected={(name) => setName(name)}
      />

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

export default Theorie;
