import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const loadEntries = (sleepEntries: SleepEntriesState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.LOAD_ENTRIES,
      payload: sleepEntries,
    });
  };
};

export const addEntry = (entry: Omit<SleepEntry, "id">) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ADD_ENTRY,
      payload: {
        sleepDate: entry.sleepDate,
        wakeUpTime: entry.wakeUpTime,
        timeOfSleep: entry.timeOfSleep,
        totalSleep: entry.totalSleep,
      },
    });
  };
};

export const removeEntry = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.REMOVE_ENTRY,
      payload: {
        id: id,
      },
    });
  };
};

export const editEntry = (entry: SleepEntry) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.EDIT_ENTRY,
      payload: entry,
    });
  };
};
