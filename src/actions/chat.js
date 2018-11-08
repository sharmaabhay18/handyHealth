import Dialogflow from 'react-native-dialogflow';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import { DATA_RETURND,
         UPDATE_TEXT,
         CLEAR_FEILD,
         FIREBASE_TEXT_RETRIEVED,
         STAR_RATING,
         GET_STAR_RATING
          } from './types';

export const updateText = (text) => {
 return {
   type: UPDATE_TEXT,
   payload: text
 };
};


export const storeData = (text, cb) => {
  let timeStamp = Math.floor(Date.now() / 1000);
  const { currentUser } = firebase.auth();
  console.log('user', currentUser);
  return (dispatch) => {
    Dialogflow.requestQuery(text,
      result => {
        dispatch({
          type: DATA_RETURND,
          payload: result
        });
        const { speech } = result.result.fulfillment;
    firebase.database().ref(`/users/${currentUser.uid}/chat`)
      .push({ text, speech, timeStamp });
      cb();
      },
      error => console.log(error)
    );
  };
};

export const startFetchingData = () => {
    const { currentUser } = firebase.auth();
    let textChildrens = [];
    let child = [];

  return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/chat`)
    .orderByValue()
    .limitToLast(5)
    .once('value', (snapshot) => {
    snapshot.forEach(childSnap => {
       child = childSnap.val();
       textChildrens.push(child);
    });
    dispatch({
       type: FIREBASE_TEXT_RETRIEVED,
       payload: textChildrens
     });
    });
  };
};

export const starRatingAction = ({ rate, id }, callback) => {
  return (dispatch) => {
    firebase.database().ref(`/doctors/${id}/rate`)
    .push({ rate })
    .then((cb) => {
      dispatch({
      type: STAR_RATING,
      payload: cb
    });
    callback();
  });
};
};

export const getStarRating = (id) => {
  let getRate = [];
  let sumRate = 0;
  let avgRate = 0;
   return (dispatch) => {
      firebase.database().ref(`/doctors/${id}/rate`)
      .once('value', (snapshot) => {
         snapshot.forEach(childSnap => {
            getRate.push(childSnap.val());
         });

         getRate.forEach((r) => {
           if (getRate.length >= 0) {
           sumRate += r.rate;
         }
         });
         avgRate = sumRate / getRate.length;

         dispatch({
           type: GET_STAR_RATING,
           payload: avgRate
         });
      });
   };
};

export const clearFeild = () => {
  return {
    type: CLEAR_FEILD
  };
};
