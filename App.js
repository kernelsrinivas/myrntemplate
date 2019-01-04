import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomePage extends Component
{
    static navigationOptions = {
      title: 'Home',
    };

    render()
    {
      const { navigate } = this.props.navigation;
      return (
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button onPress={()=>navigate("Stack")} title="Next Page"></Button>
      </View>
      );
    }
}

class StackPage extends Component
{  
    static navigationOptions = {
      title: 'Stack Navigation',
    };
    render()
    {
      const { goBack } = this.props.navigation;
      return(
        <View style={styles.container}>
        <Button onPress={()=>goBack()} title="Back to Home"></Button>
        </View>
      );
    }
}

const AppNavigator = createStackNavigator(
  {
      Home: HomePage,
      Stack: StackPage
  },
  {
      initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});