import React, { FC, useMemo } from "react";
import { ImageBackground, Image, Text, View, Pressable } from "react-native";
import createStyles from "./style";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { INITIAL_BACKGROUND, LOGO } from "../../index";
import Button from "../../../components/Button";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
        <Image source={LOGO} style={styles.logo}></Image>
        <Text style={styles.text}>
          Make yourself stronger than your excuses
        </Text>
        <View style={styles.footer}>
          <Button title="Get Started" disabled={false} onPress={() => navigation.navigate("SignupScreen")} />
          <Pressable onPress={() => navigation.navigate("SigninScreen")} >
            <Text style={styles.loginText}>Or login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
export default InitialScreen;
