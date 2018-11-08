import { DATA_RETURND,
         UPDATE_TEXT,
         CLEAR_FEILD,
         FIREBASE_TEXT_RETRIEVED,
         STAR_RATING,
         GET_STAR_RATING
 } from '../actions/types';

const INITAIL_STATE = {
  result: [],
  text: '',
  rate: '',
  avgRate: '',
  firebaseText: []
};

 export default (state = INITAIL_STATE, actions) => {
   switch (actions.type) {
     case CLEAR_FEILD:
       return { ...state, text: '' };
     case UPDATE_TEXT:
       return { ...state, text: actions.payload };
     case DATA_RETURND:
       return { ...state, result: actions.payload };
     case FIREBASE_TEXT_RETRIEVED:
       return { ...INITAIL_STATE, firebaseText: actions.payload };
     case STAR_RATING:
       return { ...state, rate: actions.payload };
     case GET_STAR_RATING:
        return { ...state, avgRate: actions.payload };   
     default:
       return state;
   }
 };
