// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  user: userReducer,
  game: gameReducer,
});
