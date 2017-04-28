import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckerBoard from './CheckerBoard';
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CheckerBoard />
            </View>
        )
    }
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30
    }
})