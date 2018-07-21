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
        showAnswer: false,
        displayResults: false
    }

    step = (isCorrect) => {
        const qIndex = this.state.qIndex
        const questionsLength = this.props.navigation.state.params.deck.questions.length
        const correct = this.state.correct

        console.log('iscorrect ', isCorrect)
        if (isCorrect) {
            this.setState({ correct: correct + 1 })
        }
        if (!isCorrect && this.state.correct > 0) {
            this.setState({ incorrect: correct - 1})
        }

        if (this.state.qIndex < questionsLength - 1) {
            const step = this.state.qIndex
            this.setState({ qIndex: step + 1 })
        } else {
            this.setState({ displayResults: true })
        }
        console.log(this.state)
    }

    showAnswer () {
        const show = !this.state.showAnswer
        this.setState({ showAnswer: show })
    }

    resetQuiz () {
        this.setState({
            qIndex: 0,
            correct: 0,
            showAnswer: false,
            displayResults: false
        })
    }

    render () {

        const { navigation } = this.props
        const {
            qIndex, correct,
            displayResults, showAnswer
        } = this.state
        const questions = navigation.state.params.deck.questions

        return (
            <View style={ styles.container }>
                {
                    !showAnswer && !displayResults &&
                    <Text style={[ styles.longText, { fontSize: 35 } ]}>
                        { questions[qIndex].question }
                    </Text>
                }
                {
                    showAnswer && !displayResults &&
                    <Text style={[ styles.longText, { fontSize: 35 } ]}>
                        { questions[qIndex].answer }
                    </Text>
                }
                {
                    !displayResults &&
                    <View>

                        <TouchableOpacity
                            onPress={ () => this.showAnswer() }
                            style={ styles.answer }
                        >
                            <Text style={{ fontSize: 15, color: 'orange' }}>
                                {
                                    !showAnswer &&
                                    'answer'
                                }
                                {
                                    showAnswer &&
                                    'question'
                                }
                            </Text>
                        </TouchableOpacity>
                        <View style={ styles.btnContainer }>
                            <TouchableOpacity
                                onPress={ () => this.step(true) }
                                style={[ styles.btn, styles.correct ]}
                            >
                                <Text style={{ fontSize: 25, color: 'white' }}>
                                    Correct
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ () => this.step(false) }
                                style={[ styles.btn, styles.incorrect ]}
                            >
                                <Text style={{ fontSize: 25, color: 'white' }}>
                                    Incorrect
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {
                    displayResults &&
                    <View style={ styles.container }>
                        <Text style={{ fontSize: 40 }}>
                            Quiz Complete!
                        </Text>
                        <Text style={{ fontSize: 30}}>
                            You scored { correct }/{ questions.length }
                        </Text>
                        <TouchableOpacity
                                onPress={ () => this.resetQuiz() }
                                style={[ styles.btn, { backgroundColor: 'yellow' }]}
                            >
                                <Text style={{ fontSize: 25, color: 'white' }}>
                                    Try Again
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Decks') }
                            style={[ styles.btn, { backgroundColor: 'purple' }]}
                        >
                            <Text style={{ fontSize: 25, color: 'white' }}>
                                Pick New Deck
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
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
    answer: {
        height: 65,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Quiz;