import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import * as Api from '../utils/api';

class DeckDetail extends Component {
    render() {
        return (
            <View>
                <Text>DeckDetail</Text>
            </View>
        )
    }
}

export default DeckDetail