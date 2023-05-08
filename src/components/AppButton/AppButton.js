import React from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import PlatformTouchable from './PlatformTouchable';

const styles = StyleSheet.create({
  button: {
    color: '#353a34',
  },
});

export default class AppHyperlink extends React.Component {
  render() {
    const {title, wrapperStyle, titleStyle, isLoading, ...rest} = this.props;
    return (
      <PlatformTouchable {...rest} disabled={isLoading} style={wrapperStyle}>
        <Text style={[styles.button, titleStyle]}>{title}</Text>
      </PlatformTouchable>
    );
  }
}
