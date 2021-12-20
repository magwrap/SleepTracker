import { ActionTypes } from "../action-types";

interface loadEntriesAction {
  type: ActionTypes.LOAD_ENTRIES;
  payload: SleepEntriesState;
}

interface AddEntryAction {
  type: ActionTypes.ADD_ENTRY;
  payload: Omit<SleepEntry, "id">;
}

interface RemoveEntryAction {
  type: ActionTypes.REMOVE_ENTRY;
  payload: {
    id: number;
  };
}

interface EditEntryAction {
  type: ActionTypes.EDIT_ENTRY;
  payload: SleepEntry;
}

export type Action =
  | AddEntryAction
  | RemoveEntryAction
  | EditEntryAction
  | loadEntriesAction;
