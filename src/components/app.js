import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckerBoard from './CheckerBoard';
import Header from './Header';
import Scoreboard from './Scoreboard';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            finished: false,
            message: null,
            pOneScore: 0,
            pTwoScore: 0
        }
    }
    componentWillMount(){
        this.initializeBoard.bind(this);
    }
    initializeBoard() {
        this.setState({
            finished: false,
            message: null
        })
    }
    isFinished(player) {
        if (player == 'P1') {
            let score = this.state.pOneScore + 1;
            this.setState({
                finished: true,
                message: `${player} wins!`,
                pOneScore: score
            })
        } else {
            let score = this.state.pTwoScore + 1;
            this.setState({
                finished: true,
                message: `${player} wins!`,
                pTwoScore: score
            })

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header heading="Tic Tac Toe" />
                <View style={styles.container}>
                    <CheckerBoard endGameWithWinner={this.isFinished.bind(this)}/>
                </View>
                <Scoreboard pOneScore={this.state.pOneScore} pTwoScore={this.state.pTwoScore}/>
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