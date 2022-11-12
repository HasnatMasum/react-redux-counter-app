import { INCREMENT, DECREMENT, RESET } from "../constant/constant";

export function incrementCounter() {
  return {
    type: INCREMENT
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT
  };
}

export function resetCounter() {
  return {
    type: RESET
  };
}
