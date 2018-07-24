import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Platform,
    StyleSheet, TextInput, KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { BackBtn } from './BackBtn'
import { SubmitBtn } from './SubmitBtn'
import { addDeck, setCurrentDeck } from '../actions'

class NewDeck extends Component {

    state = {
        title: ''
    }

    newUID = () => {
        return Math.floor(Math.random()*8999999999999999+1000000000000000).toString();
    }

    handleSubmit () {
        Keyboard.dismiss()
        this.setState({ title: '' })
        const deck = {
            'title': this.state.title,
            'id': this.newUID(),
            questions: []
        }
        this.props.addDeck(deck)
        this.props.setCurrentDeck(deck)
        this.props.navigation.navigate('DeckDetail', { id: deck.id } )
    }

    render () {
        const { navigation } = this.props

        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={
                    Platform.select({
                       ios: () => 100,
                       android: () => 120
                    })()
                }
                enabled
            >
                <BackBtn onPress={() => navigation.navigate('Decks')}/>
                <View style={ styles.container }>
                    <Text style={ styles.header }>
                        What is the name
                    </Text>
                    <Text style={ styles.header }>
                        of your new deck?
                    </Text>
                        <TextInput
                            style={ styles.input }
                            multiline={ true }
                            onChangeText={(title) => this.setState({title})}
                            value={this.state.title}
                        />
                    <SubmitBtn onPress={ this.handleSubmit.bind(this) } />
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
        flexDirection: 'column'
    },
    header: {
        fontSize: 38,
        color: 'black',
        textAlign: 'center'
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 7,
        marginTop: 50,
        marginBottom: 50,
        height: 50,
        fontSize: 25,
        marginLeft: 40,
        marginRight: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingTop: 8
    },
})

const mapDispatchToProps = dispatch => ({
    addDeck: (title) => dispatch(addDeck(title)),
    setCurrentDeck: (deck) => dispatch(setCurrentDeck(deck))
});

export default connect(null, mapDispatchToProps)(NewDeck)