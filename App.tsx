import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import ApplicationNavigator from './src/navigators/Application';

const App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);

export default App;
