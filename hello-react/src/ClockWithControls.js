import Clock from "./Clock";

function ClockWithControls() {
  return <div className="ClockWithControls">
    <div>Delay : <input /></div>
    <div>Format : <input /></div>
    <div>Show : <input type="checkbox" /></div>
    <Clock />
  </div>
}

export default ClockWithControls;
