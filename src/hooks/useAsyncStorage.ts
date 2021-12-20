import AsyncStorage from "@react-native-async-storage/async-storage";
const useAsyncStorage = () => {
  const storeSleepEntriesState = async (entries: SleepEntriesState) => {
    try {
      const jsonValue = JSON.stringify({ sleepEntries: entries });
      await AsyncStorage.setItem("@sleep_entries", jsonValue);
    } catch (e) {
      console.error(e);
    }
  };
  const getSleepEntriesState = async (): Promise<SleepEntriesState> => {
    try {
      const jsonValue = await AsyncStorage.getItem("@sleep_entries");
      const sleepEntries = jsonValue != null ? JSON.parse(jsonValue) : [];
      return sleepEntries.sleepEntries;
    } catch (e) {
      console.error(e);
    }
    return [];
  };

  return {
    storeSleepEntriesState,
    getSleepEntriesState,
  };
};

export default useAsyncStorage;
