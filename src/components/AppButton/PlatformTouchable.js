import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

class androidTouchable extends React.Component {
  render() {
    const {style, ...rest} = this.props;
    return (
      <TouchableNativeFeedback {...rest}>
        <View style={style}>{this.props.element}</View>
      </TouchableNativeFeedback>
    );
  }
}

export default class PlatformTouchable extends React.Component {
  render() {
    const Touchable = Platform.select({
      android: androidTouchable,
      ios: TouchableOpacity,
    });
    return <Touchable {...this.props} />;
  }
}
