import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productsReducer(state = initialState.products, action) {
  switch(action.type) {
    default:
      return state;
  }
}