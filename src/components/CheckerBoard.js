
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CheckerBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.blue} />
          <View style={styles.red} />
          <View style={styles.yellow} />
        </View>
        <View style={styles.row}>
          <View style={styles.red} />
          <View style={styles.yellow} />
          <View style={styles.blue} />
        </View>
        <View style={styles.row}>
          <View style={styles.yellow} />
          <View style={styles.blue} />
          <View style={styles.red} />
        </View>
      </View>
    );
  }
}
export default CheckerBoard;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  red: {
    backgroundColor: '#ff704d',
    borderWidth: 1,
    borderColor: 'white',
    flex: 1
  },
  yellow: {
    backgroundColor: '#ffff66',
    borderWidth: 1,
    borderColor: 'white',
    flex: 1
  },
  blue: {
    backgroundColor: '#4d94ff',
    borderWidth: 1,
    borderColor: 'white',
    flex: 1
  },
});
