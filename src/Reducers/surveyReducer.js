import { SURVEY_COMPLETE } from '../Actions/types';

const initialState = {
    survey_data: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SURVEY_COMPLETE:
            return {
                ...state,
                survey_data: action.payload
            }

        default:
            return state;
    }
}