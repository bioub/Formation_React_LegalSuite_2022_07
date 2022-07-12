import { useState } from "react";
import Clock, { ClockClassVersion } from "./Clock";

function ClockWithControls() {
  const [delay, setDelay] = useState(1000);
  const [format, setFormat] = useState('HH:mm:ss');
  const [show, setShow] = useState(false);

  return <div className="ClockWithControls">
    <div>Delay : <input type="number" value={delay} onChange={(e) => setDelay(+e.target.value)} /></div>
    <div>Format : <input type="text" value={format} onChange={(e) => setFormat(e.target.value)} /></div>
    <div>Show : <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /></div>
    {show && <ClockClassVersion format={format} delay={delay} />}
    {show && <Clock format={format} delay={delay} />}
  </div>
}

export default ClockWithControls;
