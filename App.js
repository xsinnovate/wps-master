import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './src/store/configureStore';
import Summary from './src/screens/Summary';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Summary />
    </Provider>
  );
}
