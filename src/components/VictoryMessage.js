import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const VictoryMessage = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.messageStyle}>{props.message}</Text>
        </View>
    )
}
export default VictoryMessage;
const styles = StyleSheet.create({
    messageStyle: {
        fontSize: 25,
        color: 'red'
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    }
});