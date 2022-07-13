import { decrement, increment } from "./actions.mjs";
import { countSelector } from "./selectors.mjs";


class CounterComponent {
  props = {
    count: 0,
  }
  constructor(store) {
    this.store = store;
    this.props.count = countSelector(this.store.getState());
    this.store.subscribe(() => {
      this.props.count = countSelector(this.store.getState());
      this.render();
    })
    this.render()
  }
  increment() {
    this.store.dispatch(increment(2));
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  render() {
    console.log('render', this.props);
  }
}

export default CounterComponent;
