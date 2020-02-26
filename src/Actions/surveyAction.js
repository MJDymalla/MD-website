import { SURVEY_COMPLETE } from './types';

// action for user data
export const surveyResult = (surveyData) => dispatch => {
    dispatch({
        type: SURVEY_COMPLETE,
        payload: surveyData
    });
}