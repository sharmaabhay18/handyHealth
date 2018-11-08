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
 } from '../actions/types';

const INITAIL_STATE = {
  email: '',
  password: '',
  phone: '',
  error: false,
  loading: false,
  user: []
};

 export default (state = INITAIL_STATE, actions) => {
   switch (actions.type) {
     case UPDATE_EMAIL:
       return { ...state, email: actions.payload };
    case UPDATE_PASSWORD:
       return { ...state, password: actions.payload };
    case UPDATE_PHONE:
       return { ...state, phone: actions.phone };
    case SPINNER_LOADING:
       return { ...state, loading: true, error: false };
    case USER_CREATED_SUCCESSFULLY:
       return { ...INITAIL_STATE, loading: false, user: actions.payload, error: false };
    case USER_CREATION_FAILED:
        return { ...INITAIL_STATE, error: true };
    case CLEAR_EVERYTHING_IN_FORM:
        return { ...INITAIL_STATE };
    case TOKEN_EXIST:
        return { ...state, token: actions.payload };
    case TOKEN_NOT_EXIST:
          return { ...state, token: null };
     default:
       return state;
   }
 };
