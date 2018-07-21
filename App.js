import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import thunk from 'redux-thunk';
import reducer from './reducers';
import NewDeck from './components/NewDeck';
import Decks from './components/Decks';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';


const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)

const TabNav = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: 'rgba(0, 0, 0, 0.14)',
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    tintColor: 'black',
    swipeEnabled: true,
    style: {
      height: 56,
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MatTabNav = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: 'rgba(0, 0, 0, 0.14)',
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    tintColor: 'black',
    swipeEnabled: true,
    style: {
      height: 56,
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Decks: {
    screen: Platform.OS === 'ios' ? TabNav : MatTabNav,
    navigationOptions: {
      header: null,
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      header: null,
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      header: null
    }
  }
})

export default class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View
            style={{ height: Constants.statusBarHeight, backgroundColor: 'red' }}
          >
            <StatusBar translucent />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
