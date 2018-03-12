import { createStore, applyMiddleware, combineReducers } from 'redux';
import { productsReducer, playerReducer, loadingReducer } from '../reducers/reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  const reducer = combineReducers({
    products: productsReducer,
    currentPlayer: playerReducer,
    isLoading: loadingReducer
    
  });
  
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}