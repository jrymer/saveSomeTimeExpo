import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import stopwatchReducer from './store/stopwatchState/stopwatch.reducer';
import RootNavigatorContainer from './navigation/root.navigator';

const store = createStore(stopwatchReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigatorContainer />
        </View>
      </Provider>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
