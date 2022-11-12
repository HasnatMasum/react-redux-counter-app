import { createStore } from "redux";
import counterReducer from "../components/counterServices/reducer/counterReducer";

const store = createStore(counterReducer);

export default store;
