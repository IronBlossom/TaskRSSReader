import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {handler as sagas} from './sagas';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const Stack = createNativeStackNavigator();
class App extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.rootContainerStyle}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
