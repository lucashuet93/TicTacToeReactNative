import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckerBoard from './CheckerBoard';
import Header from './Header';
import Scoreboard from './Scoreboard';
import VictoryMessage from './VictoryMessage'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            finished: false,
            message: null,
            pOneScore: 0,
            pTwoScore: 0,
            reInitialize: false
        }
    }
    componentWillMount(){
        this.initializeBoard.bind(this);
    }
    initializeBoard() {
        this.setState({
            finished: false,
            message: null,
            reInitialize: true
        })
    }
    revert(){
        this.setState({
            reInitialize: false
        })
    }
    isFinished(player) {
        if (player == 'P1') {
            let score = this.state.pOneScore + 1;
            this.setState({
                finished: true,
                message: `${player} WINS!`,
                pOneScore: score
            })
        } else {
            let score = this.state.pTwoScore + 1;
            this.setState({
                finished: true,
                message: `${player} WINS!`,
                pTwoScore: score
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header heading="Tic Tac Toe" />
                <VictoryMessage reInitialize={this.initializeBoard.bind(this)} visible={this.state.finished} message={this.state.message}/>
                <View style={styles.container}>
                    <CheckerBoard revert={this.revert.bind(this)} reInitialize={this.state.reInitialize} gameOver={this.state.finished} endGameWithWinner={this.isFinished.bind(this)}/>
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