import { LOG_USER } from './types';

// action for user data
export const logUser = (userData) => dispatch => {
    dispatch({
        type: LOG_USER,
        payload: userData
    });


}

export const scoreUser = (score) => dispatch => {
    dispatch({
        type: 'SCORE_USER',
        payload: score
    });


}