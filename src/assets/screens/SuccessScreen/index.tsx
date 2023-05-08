import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SuccessScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SuccessScreen</Text>
    </View>
  );
};
export default SuccessScreen;
