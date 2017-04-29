import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.heading}</Text>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold"
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA4343',
        height: 60,
        paddingTop: 15,
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

/*class Header extends React.Component {
    constructor(p) {
        super(p);
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.heading}</Text>
            </View>
        )
    }
}*/