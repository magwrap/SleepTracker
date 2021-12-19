type SleepEntry = {
  id: number;
  timeOfSleep: string;
  wakeUpTime: string;
  totalSleep: string;
};

type SleepEntriesState = [] | SleepEntry[];
