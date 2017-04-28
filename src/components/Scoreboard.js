import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Scoreboard = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.playerStyle}>P1</Text>
            <Text style={styles.scoreStyle}>{props.pOneScore} - {props.pTwoScore}</Text>
            <Text style={styles.playerStyle}>P2</Text>
        </View>
    )
}
export default Scoreboard;
const styles = StyleSheet.create({
    playerStyle: {
        fontSize: 20,
        color: 'black'
    },
    scoreStyle: {
        fontSize: 25,
        color: 'red'
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: 60,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }
});