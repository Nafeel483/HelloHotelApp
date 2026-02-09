import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from './Styles';

type Props = {
  visible: boolean;
  date: Date;
  mode?: "date" | "time";
  onConfirm: (date: Date) => void;
  onCancel: () => void;
};

export default function ModalDatePicker({
  visible,
  date,
  mode = "date",
  onConfirm,
  onCancel,
}: Props) {
  const [tempDate, setTempDate] = useState(date);

  const handleChange = (_: any, selected?: Date) => {
    if (selected) setTempDate(selected);
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={Styles.overlay}>
        <View style={Styles.container}>
          <Text style={Styles.title}>{`Select ${mode}`}</Text>

          <DateTimePicker
            value={tempDate}
            mode={mode}
            display={"spinner"}
            onChange={handleChange}
            style={{ alignSelf: "center" }}
          />

          <View style={Styles.actions}>
            <Pressable onPress={onCancel}>
              <Text style={Styles.cancel}>{'Cancel'}</Text>
            </Pressable>

            <Pressable onPress={() => onConfirm(tempDate)}>
              <Text style={Styles.ok}>{"OK"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}