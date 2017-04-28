
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

class BoardTile extends Component {
  constructor(p) {
    super(p);
  }
  onSelect(){
      this.props.tileSelected(this.props.index);
  }
  render() {
    let colorStyle = this.props.player == 'P1' ? styles.red : styles.blue;
    return (
          <View style={colorStyle} />
    );
  }
}
export default CheckerBoard;
const styles = StyleSheet.create({
  red: {
    backgroundColor: '#ff704d',
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
