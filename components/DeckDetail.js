import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { getDeck } from '../actions'
import { BackBtn } from './BackBtn';

class DeckDetail extends Component {

    componentWillMount() {
        this.props.getDeck(this.props.navigation.state.params.id)
    }

    render() {
        const { deck, navigation } = this.props

        return (
            <View style={ styles.container }>
                <BackBtn onPress={() => navigation.navigate('Decks')}/>
                <View style={ styles.subContainer }>
                    {
                        !deck &&
                        <View>
                            <Text>Sorry, this deck couldn't be found</Text>
                        </View>
                    }
                    {
                        deck &&
                        <View style={ styles.contentContainer }>
                            <View style={ styles.deck }>
                                <Text style={{ fontSize: 35 }}>{ deck.title }</Text>
                                <Text style={{ fontSize: 30 }}>{ deck.questions.length }</Text>
                            </View>
                            <View style={ styles.btnContainer }>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Quiz')}
                                    style={[ styles.quizBtn, styles.btn ]}
                                >
                                    <Text style={ styles.btnText }>
                                        Start Quiz
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('AddCard', { id: deck.id })}
                                    style={[ styles.addBtn, styles.btn ]}
                                >
                                    <Text style={ styles.btnText }>
                                        Add Card
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderWidth: 3,
        borderColor: 'black'
    },
    subContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        paddingTop: 50,
        paddingBottom: 50,
        margin: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.75)',
        alignSelf: 'stretch',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    contentContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    deck: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    notFound: {
        alignItems: 'center',
        backgroundColor: 'red',
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 30
    },
    btn: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
    },
    quizBtn: {
        backgroundColor: 'blue',
    },
    addBtn: {
        backgroundColor: 'red',
    },
    btnText: {
        color: 'white',
        fontSize: 25
    }
})

const mapDispatchToProps = dispatch => ({
    getDeck: (id) => dispatch(getDeck(id))
})

const mapStateToProps = state => ({
    deck: state.currentDeck
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)