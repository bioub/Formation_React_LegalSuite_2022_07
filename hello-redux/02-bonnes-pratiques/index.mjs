import { configureStore } from "./configureStore.mjs";
import CounterComponent from "./counter-component.mjs";

const store = configureStore();

const likeButton1 = new CounterComponent(store);
const likeButton2 = new CounterComponent(store);

likeButton1.increment();
likeButton1.increment();
likeButton1.increment();

likeButton2.increment();
likeButton2.increment();

likeButton2.decrement();
