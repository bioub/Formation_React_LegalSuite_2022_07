/*
<div class="Hello" title="Hello component">
  Hello <span id="name">Romain</span>
</div>
*/

import React from 'react';

// Voir Element, HTMLElement, HTMLInputElement, HTMLFormElement
// Sur MDN
// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.title = 'Hello component';

//   const spanEl = document.createElement('span');
//   spanEl.id = 'name';

//   spanEl.append('Romain');

//   divEl.append('Hello ', spanEl);

//   document.body.append(divEl);
// }

// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello', title: 'Hello component' },
//     'Hello ',
//     React.createElement('span', { id: 'name' }, 'Romain'),
//   );
// }

// /**
//  * Mon composant Hello
//  * @param {object} props Les props
//  * @param {string} props.name Le prénom à utiliser
//  * @param {number} props.age L'age du contact
//  */
// function Hello(props) {
//   return (
//     <div className="Hello" title="Hello component">
//       Hello my name is <span id="name">{props.name ?? 'John'}</span>
//       , I'm am {props.age} years old
//     </div>
//   );
// }

function Hello({ name = 'John', age = 18 }) {
  console.log('Hello called');
  return (
    <div className="Hello" title="Hello component">
      Hello my name is <span id="name">{name}</span>
      , I'm am {age} years old
    </div>
  );
}

export default Hello;
