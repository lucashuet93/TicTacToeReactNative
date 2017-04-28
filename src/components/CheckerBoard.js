
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CheckerBoard extends Component {
  constructor(p) {
    super(p);
    this.state = {
      gameboard: [],
      winner: null
    }
  }
  initializeGameboard(){
    let board = [];
    for(let i = 0; i < 9; i++){
      board.push(
        {
          index: i,
          user: null
        })
    };
    this.setState({
      gameboard: board
    })
  }
  endGame() {
    //need to send either "P1" or "P2" to this method
    this.props.endGameWithWinner();
  }
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
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
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
