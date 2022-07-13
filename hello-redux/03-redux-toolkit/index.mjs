import rtk from "@reduxjs/toolkit";
import CounterComponent from "./counter-component.mjs";
import { reducer } from "./reducer.mjs";

const store = rtk.configureStore({
  reducer: reducer,
});

const likeButton1 = new CounterComponent(store);
const likeButton2 = new CounterComponent(store);

likeButton1.increment();
likeButton1.increment();
likeButton1.increment();

likeButton2.increment();
likeButton2.increment();

likeButton2.decrement();
