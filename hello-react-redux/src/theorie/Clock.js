import { Component, useEffect, useRef, useState } from 'react';
import { format as formatDate } from 'date-fns';

export class ClockClassVersion extends Component {
  // Class properties (ES2022)
  state = {
    now: new Date(),
  };

  componentDidMount() {
    const { delay = 1000 } = this.props;
    this._interval = setInterval(() => {
      this.setState({
        // ne passer que les changements au premier niveau
        now: new Date(),
      });
    }, delay);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.delay !== this.props.delay) {
      clearInterval(this._interval)
      const { delay = 1000 } = this.props;
      this._interval = setInterval(() => {
        this.setState({
          // ne passer que les changements au premier niveau
          now: new Date(),
        });
      }, delay);
    }
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    // console.log('Clock called');
    const { format = 'HH:mm:ss' } = this.props;
    const { now } = this.state;
    return (
      <div className="Clock">
        Il est {formatDate(now, format)} au format {format}
        <button onClick={() => clearInterval(this._interval)}>Stop</button>
      </div>
    )
  }
}

// sous forme de classe, le state est un objet, ex :
// {
//   now: new Date(),
//   format: 'HH:mm:ss'
// };

// sous forme de fonction avec les hooks, le state est un tableau, ex :
// [new Date(), 'HH:mm:ss']

function Clock({ format = 'HH:mm:ss', delay = 1000 }) {
  // console.log('Clock called');
  // const now = new Date();
  // const format = 'HH:mm:ss';
  const [now, setNow] = useState(new Date()); // 1er appel (state[0])
  // const [format] = useState('HH:mm:ss'); // 2e appel (state[1])
  const _interval = useRef();
  useEffect(() => {
    // componentDidMount + componentDidUpdate (si delay change)
    _interval.current = setInterval(() => {
      setNow(new Date());
    }, delay);

    return () => {
      // componentWillUnmount + componentWillUpdate (si delay change)
      clearInterval(_interval.current);
    };
  }, [delay]);

  useEffect(() => {}); // // componentDidMount + componentDidUpdate (tout le temps)
  useEffect(() => {}, []); // // componentDidMount
  useEffect(() => {}, [delay]); // // componentDidMount + componentDidUpdate (si delay change)

  return (
    <div className="Clock">
      Il est {formatDate(now, format)} au format {format}
      <button onClick={() => clearInterval(_interval.current)}>Stop</button>
    </div>
  );
}

export default Clock;
