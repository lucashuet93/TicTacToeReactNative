import React from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
class VictoryMessage extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            open: false
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.visible
        })
    }
    playAgain() {
        this.setState({
            open: false
        })
        this.props.reInitialize();
    }
    render() {
        let open = this.state.open;
        return (
            <Modal
                visible={open}
                animationType={'slide'}
                transparent={true}
                onRequestClose={() => {
                    this.props.reInitialize();
                }}
            >
                <View style={styles.modalStyle}>
                    <View style={styles.viewStyle}>
                        <View style={styles.messageContainerStyle}>
                            <Text style={styles.messageStyle}>{this.props.message}</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.playAgain.bind(this)}>
                                <Text style={styles.buttonTextStyle}>Play Again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
export default VictoryMessage;
const styles = StyleSheet.create({
    messageStyle: {
        textAlign: 'center',
        fontSize: 20
    },
    messageContainerStyle:{
        justifyContent: "center",
        alignItems: "center",
        flex: 3
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        justifyContent: "center",
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        borderRadius: 5,
        elevation: 1,
        padding: 5
    },
    viewStyle: {
        borderBottomWidth: 1,
        height: 100,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
    },
    modalStyle: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        position: "relative",
    },
    buttonTextStyle:{
        fontSize: 17,
        fontWeight: "600",
        color: '#007aff',
    }
});