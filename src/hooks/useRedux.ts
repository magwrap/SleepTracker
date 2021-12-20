import { actionCreators } from "@/state";
import { State } from "@/state/reducers";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import useAsyncStorage from "./useAsyncStorage";

const useRedux = () => {
  const dispatch = useDispatch();
  const { storeSleepEntriesState } = useAsyncStorage();
  const { addEntry, editEntry, removeEntry, loadEntries } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const sleepEntries: SleepEntriesState = useSelector(
    (state: State): SleepEntriesState => state.sleepEntries
  );

  const storeEntries = () => {
    storeSleepEntriesState(sleepEntries);
  };

  return {
    sleepEntries,
    addEntry,
    editEntry,
    removeEntry,
    loadEntries,
    storeEntries,
  };
};

export default useRedux;
