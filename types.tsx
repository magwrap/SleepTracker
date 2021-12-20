type SleepEntry = {
  id: number;
  sleepDate: Date;
  timeOfSleep: Date;
  wakeUpTime: Date;
  totalSleep: Date;
};

type SleepEntriesState = [] | SleepEntry[];
