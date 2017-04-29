import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
const Button = (props) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Button;
const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        borderRadius: 5,
        elevation: 1
    },
    textStyle:{
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff',
    }

})