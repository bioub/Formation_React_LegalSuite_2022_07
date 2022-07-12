import { Component, useState } from 'react';

// class ExMultiStateButton extends Component {
//   state = {
//     value: this.props.items[0],
//   };
//   handleClick = (event) => {
//     const { value } = this.state;
//     const { items } = this.props;
//     const currentIndex = items.indexOf(value);
//     this.setState({
//       value: items[(currentIndex + 1) % items.length],
//     });
//   };
//   render() {
//     const { value } = this.state;
//     return (
//       <button className="ExMultiStateButton" onClick={this.handleClick}>
//         {value}
//       </button>
//     );
//   }
// }

function ExMultiStateButton({ items, value, onSelected }) {
  // const [value, setValue] = useState(items[0] ?? '')

  const handleClick = () => {
    const currentIndex = items.indexOf(value);
    onSelected(items[(currentIndex + 1) % items.length]);
  };

  return (
    <button className="ExMultiStateButton" onClick={handleClick}>
      {value}
    </button>
  );
}

export default ExMultiStateButton;

// Exercice 2
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin
