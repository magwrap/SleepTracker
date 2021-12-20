import React, { useState } from "react";
import { Platform, View } from "react-native";
import { Button } from "react-native-paper";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  mode: AndroidMode;
  des: string;
  disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  setDate,
  mode,
  des,
  disabled = false,
}) => {
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    if (!disabled) {
      setDate(currentDate);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button onPress={showPicker}>{des}</Button>
      {show && (
        <RNDateTimePicker
          testID="datePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={"default"}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
