import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton, RkTextInput, RkText } from "react-native-ui-kitten";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RkTextInput rkType="bordered" placeholder="WaniKani API Key" />
        <RkText rkType="small" style={styles.hint}>Find this under Settings &gt; Account on WaniKani</RkText>
        <RkButton rkType="primary stretch">Start Reviews</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  hint: {
    paddingBottom: 10
  }
});
