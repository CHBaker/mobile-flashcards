import React, { Component } from 'react'
import {
    View, TouchableOpacity, Text, TextInput,
    Platform, StyleSheet, KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { BackBtn } from './BackBtn'
import { SubmitBtn } from './SubmitBtn'

class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    handleSubmit() {
        const id = this.props.navigation.state.params.id
        cardObj = {
            id: id,
            question: this.state.question,
            answer: this.state.answer
        }

        Keyboard.dismiss();
        this.props.addCard(cardObj);
        this.props.navigation.navigate('DeckDetail', { id: id })
        this.setState({ question: '', answer: '' })
    }

    render() {

        const { navigation } = this.props

        return (
            <KeyboardAvoidingView
                style={ styles.container } 
                behavior="padding"
                keyboardVerticalOffset={
                    Platform.select({
                       ios: () => 80,
                       android: () => 60
                    })()
                }
                enabled
            >
                <BackBtn
                    onPress={
                        () => navigation.navigate(
                            'DeckDetail', { id : navigation.state.params.id}
                        )
                    } 
                />
                <View style={ styles.container }>
                    <Text style={ styles.label }>
                        Question
                    </Text>
                    <TextInput
                        style={ styles.input }
                        multiline={ true }
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    />
                    <Text style={ styles.label }>
                        Answer
                    </Text>
                    <TextInput
                        style={[ styles.input, { marginBottom: 40 } ]}
                        multiline={ true }
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    />
                    <SubmitBtn
                        onPress={ this.handleSubmit.bind(this) }
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    label: {
        alignSelf: 'stretch',
        fontSize: 38,
        color: 'black',
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
    },
    input: {
        alignSelf: 'stretch',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 7,
        marginBottom: 15,
        height: 50,
        fontSize: 25,
        marginLeft: 40,
        marginRight: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingTop: 8
    }
})

const mapDispatchToProps = dispatch => ({
    addCard: (cardObj) => dispatch(addCard(cardObj))
})

export default connect(null, mapDispatchToProps)(AddCard)