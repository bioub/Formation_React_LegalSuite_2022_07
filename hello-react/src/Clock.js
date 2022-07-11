import { Component } from "react";

class Clock extends Component {
  // Class properties (ES2022)
  state = {
    now: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    console.log('Clock called');
    return (
      <div className="Clock">
        Il y est {this.state.now.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
