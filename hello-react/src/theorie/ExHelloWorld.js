import { Component, useState } from 'react';

// class ExHelloworld extends Component {
//   state = {
//     name: 'Romain'
//   };
//   handleInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   render() {
//     const { name } = this.state;
//     return (
//       <div className="ExHelloworld">
//         <div>
//           Name : <input value={name} onInput={this.handleInput} />
//         </div>
//         <p>
//           Hello <span>{name}</span> !
//         </p>
//       </div>
//     );
//   }
// }

function ExHelloworld() {
  console.log('ExHelloworld called');
  const [name, setName] = useState('Romain')
  // const handleInput = (e) => setName(e.target.value);
  // function handleInput(e) {
  //   setName(e.target.value);
  // }

  return (
    <div className="ExHelloworld">
      <div>
        Name : <input value={name} onInput={(e) => setName(e.target.value)} />
      </div>
      <p>
        Hello <span>{name}</span> !
      </p>
    </div>
  );
}

export default ExHelloworld;

// Exercice 1
// Créer une propriété name sur le state avec une valeur par défaut
// L'afficher dans la balise span
// A la saisi dans le champ (methode handleInput)
// modifier la valeur de name du state
// (pour récupérer la valeur du champ utiliser event.currentTarget.value)
// Le composant se raffraichira tout seul
