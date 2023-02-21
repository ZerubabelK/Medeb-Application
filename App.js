import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/navigator/Navigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
