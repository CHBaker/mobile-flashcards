import React, { Component } from 'react'
import {
    View, TouchableOpacity, Text,
    Platform, StyleSheet,
} from 'react-native';
import { BackBtn } from './BackBtn'

class Quiz extends Component {

    state = {
        qIndex: 0,
        correct: 0,
        incorrect: 0
    }

    step = () => {
        const qIndex = this.state.qIndex
        const questionsLength = this.props.navigation.state.params.deck.questions.length
        if (this.state.qIndex <= (questionsLength - 1)) {
            const step = this.state.qIndex
            this.setState({ qIndex: step + 1 });
        }
    }

    render () {

        const { navigation } = this.props
        const { qIndex, correct, incorrect } = this.state
        const questions = navigation.state.params.deck.questions

        return (
            <View style={ styles.container }>
                <Text style={[ styles.longText, { fontSize: 35 } ]}>
                    { questions[qIndex].question }
                </Text>
                <Text style={{ fontSize: 15, color: 'orange' }}>
                    answer
                </Text>
                <View style={ styles.btnContainer }>
                    <TouchableOpacity
                        onPress={() => this.step() }
                        style={[ styles.btn, styles.correct ]}
                    >
                        <Text style={{ fontSize: 25, color: 'white' }}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.step() }
                        style={[ styles.btn, styles.incorrect ]}
                    >
                        <Text style={{ fontSize: 25, color: 'white' }}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    longText: {
        textAlign: 'center'
    },
    btnContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    correct: {
        backgroundColor: 'green'
    },
    incorrect: {
        backgroundColor: 'red',
    },
    btn: {
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        height: 65,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Quiz;