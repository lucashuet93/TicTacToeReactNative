import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckerBoard from './CheckerBoard';
import Header from './Header';
class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header heading="Tic Tac Toe"/>
                <View style={styles.container}>
                    <CheckerBoard />
                </View>
            </View>
        )
    }
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    }
})