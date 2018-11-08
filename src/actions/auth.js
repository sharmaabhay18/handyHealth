import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { UPDATE_EMAIL,
         UPDATE_PASSWORD,
         UPDATE_PHONE,
         CREATE_USER,
         SPINNER_LOADING,
         USER_CREATED_SUCCESSFULLY,
         USER_CREATION_FAILED,
         CLEAR_EVERYTHING_IN_FORM,
         TOKEN_EXIST,
         TOKEN_NOT_EXIST
 } from './types';

export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  };
};

export const updatePhone = (phone) => {
  return {
    type: UPDATE_PHONE,
    payload: phone
  };
};

export const loginUser = ({ email, password }, cb) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem('user_token');
    if (token) {
      dispatch({
        type: TOKEN_EXIST,
        payload: token
      });
      cb();
    } else {
    dispatch({
      type: SPINNER_LOADING
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => RegisterSuccessAction(dispatch, user, cb))
    .catch(() => RegisterFailedAction(dispatch));
  }
};
};

export const createUser = ({ email, password, phone }, cb) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem('user_token');
    console.log('token', token);
    if (token) {
      dispatch({
        type: TOKEN_EXIST,
        payload: token
      });
      cb();
    } else {
    dispatch({ type: SPINNER_LOADING });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => RegisterSuccessAction(dispatch, user, cb))
    .catch(() => RegisterFailedAction(dispatch));
  }
  };
};

const RegisterSuccessAction = async (dispatch, user, cb) => {

   dispatch({
     type: USER_CREATED_SUCCESSFULLY,
     payload: user
   });
   await AsyncStorage.setItem('user_token', JSON.stringify(user.user.uid));
   dispatch({
     type: TOKEN_EXIST,
     payload: user.user.uid
   });
   cb();
   console.log(user.user.uid);
};

const RegisterFailedAction = (dispatch) => {
  dispatch({
     type: USER_CREATION_FAILED,
  });
  dispatch({
    type: TOKEN_NOT_EXIST
  });
};

export const clearForm = () => {
  return {
    type: CLEAR_EVERYTHING_IN_FORM
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(AsyncStorage.removeItem('user_token'));
    dispatch({ type: CLEAR_EVERYTHING_IN_FORM });
  };
};
