import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
            style={ styles.submit }
            onPress={ onPress }
        >
            <Text style={ styles.submitText }>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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