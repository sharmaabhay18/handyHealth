import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../reducers';


const persistConfig = {
  key: 'root', storage: AsyncStorage, whitelist: ['chat']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(thunk)
  )
);
const persistor = persistStore(store);
return { store, persistor };
};
