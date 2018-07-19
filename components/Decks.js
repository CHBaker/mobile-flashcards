import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import * as Api from '../utils/api';

class Decks extends Component {

    componentDidMount () {
        Api.initDecks().then(
           () => this.props.getDecks()
        )
    }

    render () {

        const { decks } = this.props

        return (
            <View style={ styles.container }>
                {
                    !decks &&
                    <Text>
                        You have no decks at the moment,
                        go create one!
                    </Text>
                }
                {
                    decks.map((deck, index) => (
                        <View style={ styles.deck } key={ index }>
                            <Text style={{ fontSize: 24 }}>{ deck.title }</Text>
                            <Text style={{ fontSize: 20 }}>{ deck.questions.length }</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    deck: {
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.75)',
        alignSelf: 'stretch',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})

const mapDispatchToProps = dispatch => ({
    getDecks: () => dispatch(getDecks())
});

const mapStateToProps = state => ({
    decks: state.decks
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
