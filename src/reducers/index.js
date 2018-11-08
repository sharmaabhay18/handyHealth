import { combineReducers } from 'redux';
import Authentication from './Authentication';
import Chat from './Chat';

export default combineReducers({
  auth: Authentication,
  chat: Chat
});
