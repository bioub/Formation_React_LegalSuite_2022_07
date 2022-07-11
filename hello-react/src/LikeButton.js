import { Component } from "react";

// pour récupérer this (bind in constructor)
// class LikeButton extends Component {
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
//     console.log('LikeButton called');
//     const { count } = this.state;
//     return <button className="LikeButton" onClick={this.handleClick}>{count}</button>;
//   }
// }

// bind in render
// class LikeButton extends Component {
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
//     console.log('LikeButton called');
//     const { count } = this.state;
//     return <button className="LikeButton" onClick={this.handleClick.bind(this)}>{count}</button>;
//   }
// }

// arrow function in render
// class LikeButton extends Component {
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
//     console.log('LikeButton called');
//     const { count } = this.state;
//     return <button className="LikeButton" onClick={() => this.handleClick()}>{count}</button>;
//   }
// }

// Arrow function as class property (ES2022)
class LikeButton extends Component {
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
  }
  render() {
    console.log('LikeButton called');
    const { count } = this.state;
    return <button className="LikeButton" onClick={this.handleClick}>{count}</button>;
  }
}

export default LikeButton;
