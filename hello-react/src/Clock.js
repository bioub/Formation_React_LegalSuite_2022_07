import { Component, useEffect, useState } from 'react';

// class Clock extends Component {
//   // Class properties (ES2022)
//   state = {
//     now: new Date(),
//     format: 'HH:mm:ss'
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         // ne passer que les changements
//         now: new Date(),
//       });
//     }, 1000);
//   }

//   render() {
//     console.log('Clock called');
//     const { now, format } = this.state;
//     return (
//       <div className="Clock">
//         Il est {now.toLocaleTimeString()} au format {format}
//       </div>
//     )
//   }
// }

// sous forme de classe, le state est un objet, ex :
// {
//   now: new Date(),
//   format: 'HH:mm:ss'
// };

// sous forme de fonction avec les hooks, le state est un tableau, ex :
// [new Date(), 'HH:mm:ss']

function Clock() {
  console.log('Clock called');
  // const now = new Date();
  // const format = 'HH:mm:ss';
  const [now, setNow] = useState(new Date()); // 1er appel (state[0])
  const [format] = useState('HH:mm:ss'); // 2e appel (state[1])

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return (
    <div className="Clock">
      Il est {now.toLocaleTimeString()} au format {format}
    </div>
  );
}

export default Clock;
