import useAsyncStorage from "@/hooks/useAsyncStorage";
import useRedux from "@/hooks/useRedux";
import LoadingScreen from "@/screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AppStackNavigator from "./App/AppStackNavigator";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
  const { loadEntries } = useRedux();
  const [loading, setLoading] = useState(false);
  const { getSleepEntriesState } = useAsyncStorage();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    setLoading(true);
    try {
      const sleepEntries = await getSleepEntriesState();

      if (sleepEntries) {
        loadEntries(sleepEntries);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <NavigationContainer>
      {!loading ? <AppStackNavigator /> : <LoadingScreen />}
    </NavigationContainer>
  );
};

export default Routes;
