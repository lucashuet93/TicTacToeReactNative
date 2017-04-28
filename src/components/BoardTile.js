
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

class BoardTile extends Component {
    constructor(p) {
        super(p);
    }
    onSelect() {
        if (this.props.player == null && this.props.gameOver == false) {
            this.props.tileSelected(this.props.index, this.props.turn);
        }
    }
    render() {
        let colorStyle = this.props.player ? (this.props.player == 'P1' ? styles.red : styles.blue) : styles.gray;
        return (
            <TouchableOpacity style={colorStyle} onPress={this.onSelect.bind(this)}>
                <View />
            </TouchableOpacity>
        );
    }
}
export default BoardTile;
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
    gray: {
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'white',
        flex: 1
    },
});
