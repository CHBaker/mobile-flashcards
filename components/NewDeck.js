import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Platform,
    StyleSheet, TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { BackBtn } from './BackBtn'

class NewDeck extends Component {

    state = {
        title: null
    }

    handleSubmit () {
        console.log(this.state)

        this.setState({ title: null })
    }

    goBack() {
        console.log('back')
    }

    render () {
        return (
            <View style={{ flex: 1 }}>
                <BackBtn onPress={ this.goBack() }/>
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
                    <TouchableOpacity
                        style={ styles.submit }
                        onPress={ this.handleSubmit.bind(this) }
                    >
                        <Text style={ styles.submitText }>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    submit: {
        padding: 5,
        height: 53,
        backgroundColor: 'red',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 60,
        marginLeft: 60,
        borderRadius: 7
    },
    submitText: {
        color: 'white',
        fontSize: 28,
    }
})



export default connect()(NewDeck)