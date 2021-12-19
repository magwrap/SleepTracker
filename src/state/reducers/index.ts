import { combineReducers } from "redux";
import sleepEntriesReducer from "./sleepEntriesReducer";

const reducers = combineReducers({
  sleepEntries: sleepEntriesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
