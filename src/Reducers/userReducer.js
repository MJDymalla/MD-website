import { LOG_USER } from '../Actions/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
      case LOG_USER:
        return {
          ...state,
          user: action.payload
        };
      case 'SCORE_USER':
        return {
          ...state,
          user:{
              ...state.user,
              entrepreneurScore: action.payload
          }
        };
      default:
        return state;
    }
}