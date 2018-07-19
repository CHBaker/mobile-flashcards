import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Platform,
    StyleSheet, TextInput
} from 'react-native'

class NewDeck extends Component {

    state = {
        title: null
    }

    handleSubmit () {
        console.log(this.state)
    }

    render () {
        return (
            <View>
                <Text>
                    What is the name of your new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeTitle={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TouchableOpacity
                    style={ styles.submit }
                    onPress={ () => this.handleSubmit() }
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'stretch'
    },
    input: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        padding: 5
    },
    submit: {
        fontSize: 20,
        padding: 5,
        backgroundColor: 'red',
        color: 'white',
    }
})

export default NewDeck;