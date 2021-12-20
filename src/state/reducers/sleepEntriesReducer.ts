import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import nextId from "react-id-generator";

const initialState: SleepEntriesState = [];

const sleepEntriesReducer = (
  state: SleepEntriesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.LOAD_ENTRIES:
      return action.payload;

    case ActionTypes.ADD_ENTRY:
      return [
        ...state,
        {
          id: nextId(),
          sleepDate: action.payload.sleepDate,
          wakeUpTime: action.payload.wakeUpTime,
          timeOfSleep: action.payload.timeOfSleep,
          totalSleep: action.payload.totalSleep,
        },
      ];
    case ActionTypes.REMOVE_ENTRY:
      return state.filter(
        (entry: SleepEntry) => entry.id !== action.payload.id
      );
    case ActionTypes.EDIT_ENTRY:
      return state.map((entry: SleepEntry) =>
        entry.id === action.payload.id ? action.payload : entry
      );
    default:
      return state;
  }
};

export default sleepEntriesReducer;
