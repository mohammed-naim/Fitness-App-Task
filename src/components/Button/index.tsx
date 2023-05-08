import React, { FC, useMemo } from "react";
import { StyleProp, TextStyle, ViewStyle, Pressable, Text, Touchable, TouchableOpacity } from "react-native";
import createStyles from "./styles";
import { Colors } from "../../assets/constants/colors";

interface IProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<IProps> = function({
                                      title,
                                      onPress,
                                      disabled,
                                      buttonStyle,
                                      textStyle
                                    }) {
  const styles = useMemo(() => createStyles(), []);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? Colors.GREY : Colors.ORANGE },
        buttonStyle
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
