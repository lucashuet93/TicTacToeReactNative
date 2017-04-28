
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BoardTile from './BoardTile';
class CheckerBoard extends Component {
  constructor(p) {
    super(p);
    this.state = {
      gameboard: [],
      turn: 'P1'
    }
  }
  componentWillMount(){
    this.initializeGameboard();
  }
  initializeGameboard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
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
  determineWinner(player) {
    let board = this.state.gameboard;
    let currentTiles = board.map(tile => {
      if (tile.user === player) {
        board.push(tile.index);
      }
    });
    let zero = board.includes(0);
    let one = board.includes(1);
    let two = board.includes(2);
    let three = board.includes(3);
    let four = board.includes(4);
    let five = board.includes(5);
    let six = board.includes(6);
    let seven = board.includes(7);
    let eight = board.includes(8);
    if ((zero && three && six) ||
      (one && four && seven) ||
      (two && five && eigth) ||
      (zero && one && two) ||
      (three && four && five) ||
      (six && seven && eight) ||
      (zero && four && eight) ||
      (two && four && six)) {
      this.endGame(player)
    }
  }
  endGame(player) {
    //need to send either "P1" or "P2" to this method
    this.props.endGameWithWinner();
    this.setState({
      winner: player,
    })
  }
  tileSelected(index, player){
    let newPlayer = this.state.turn === 'P1' ? 'P2' : 'P1';
    let board = this.state.gameboard;
    board[index].user = player;
    this.setState({
      turn: newPlayer,
      gameboard: board
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <BoardTile index={0} turn={this.state.turn} player={this.state.gameboard[0].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={1} turn={this.state.turn} player={this.state.gameboard[1].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={2} turn={this.state.turn} player={this.state.gameboard[2].user} tileSelected={this.tileSelected.bind(this)}/>
        </View>
        <View style={styles.row}>
          <BoardTile index={3} turn={this.state.turn} player={this.state.gameboard[3].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={4} turn={this.state.turn} player={this.state.gameboard[4].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={5} turn={this.state.turn} player={this.state.gameboard[5].user} tileSelected={this.tileSelected.bind(this)}/>
        </View>
        <View style={styles.row}>
          <BoardTile index={6} turn={this.state.turn} player={this.state.gameboard[6].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={7} turn={this.state.turn} player={this.state.gameboard[7].user} tileSelected={this.tileSelected.bind(this)}/>
          <BoardTile index={8} turn={this.state.turn} player={this.state.gameboard[8].user} tileSelected={this.tileSelected.bind(this)}/>
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
