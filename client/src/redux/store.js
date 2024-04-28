// configuring redux toolkit so that user data can be used globally anywhere in the application:
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './user/userSlice';

import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// combineReducers is used to combine multiple reducers into a single reducer object. In this case, we are combining the userReducer and themeReducer into a single rootReducer object.
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

// purpose of Redux-persist is to persist the redux store between sessions so that the user data is not lost when the user refreshes the page or closes the browser.(the applications state is saved)
const persistConfig = {
  key: 'root',
  storage,
  version: 1, 
};
// persistReducer is used to create a new persisted reducer with the persistent capabilities . it takes the persistConfig and the rootReducer(contains all reduces) as arguments.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore is used to create a Redux store instance with the given reducer and middleware. In this case, we are using the persistedReducer as the reducer.
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
