import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export function BackBtn ({ onPress }) {
    return (
        <TouchableOpacity onPress={ onPress } style={ styles.backHeader }>
            <FontAwesome name='arrow-left' size={ 30 } color='white' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backHeader: {
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingTop: 5,
        height: 45,
        backgroundColor: 'black',
    }
})