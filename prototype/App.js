import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screen
import Home from './screens/Home';
import Addtodo from './screens/AddTodo';
const Welcome = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'TODO LIST'
    })
  },
  Addtodo: {
    screen: Addtodo,
    navigationOptions: ({ navigation }) => ({
      title: 'ADD TODO LIST'
    })
  },
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(Welcome) 