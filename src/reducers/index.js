import {combineReducers} from 'redux';
import { cardListReducer } from './cardListReducer';

export const Reducers = combineReducers({
  cardListManager: cardListReducer
});

// Quando a aplicação possui muitos reducers deve ser combinados para serem enviados à store 

// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;
