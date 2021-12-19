import { actionCreators } from "@/state";
import { State } from "@/state/reducers";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const useRedux = () => {
  const dispatch = useDispatch();
  const { addEntry, editEntry, removeEntry } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const sleepEntries: SleepEntriesState = useSelector(
    (state: State): SleepEntriesState => state.sleepEntries
  );

  return {
    sleepEntries,
    addEntry,
    editEntry,
    removeEntry,
  };
};

export default useRedux;
