import { Component } from 'react';
import { useDispatch } from 'react-redux';

// pour récupérer this (bind in constructor)
// class LikeButtonUncontrolled extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log('button clicked');
//     console.log(this); // this vaut undefined si pas de précaution
//   }
//   render() {
//     console.log('LikeButtonUncontrolled called');
//     const { count } = this.state;
//     return <button className="LikeButtonUncontrolled" onClick={this.handleClick}>{count}</button>;
//   }
// }

// bind in render
// class LikeButtonUncontrolled extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick() {
//     console.log('button clicked');
//     console.log(this); // this vaut undefined si pas de précaution
//   }
//   render() {
//     console.log('LikeButtonUncontrolled called');
//     const { count } = this.state;
//     return <button className="LikeButtonUncontrolled" onClick={this.handleClick.bind(this)}>{count}</button>;
//   }
// }

// arrow function in render
// class LikeButtonUncontrolled extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick() {
//     console.log('button clicked');
//     console.log(this); // this vaut undefined si pas de précaution
//   }
//   render() {
//     console.log('LikeButtonUncontrolled called');
//     const { count } = this.state;
//     return <button className="LikeButtonUncontrolled" onClick={() => this.handleClick()}>{count}</button>;
//   }
// }

// Arrow function as class property (ES2022)
class LikeButtonUncontrolled extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    // console.log('button clicked');
    // console.log(this); // this vaut undefined si pas de précaution
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    console.log('LikeButtonUncontrolled called');
    const { count } = this.state;
    return (
      <button className="LikeButtonUncontrolled" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

export function LikeButtonControlled({ count = 0, onIncrement = () => {} }) {
  const handleClick = () => {
    onIncrement(count + 1);
  };
  return (
    <button className="LikeButtonControlled" onClick={handleClick}>
      {count}
    </button>
  );
}

export default LikeButtonUncontrolled;
