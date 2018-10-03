import axios from "axios";
import {FETCH_USER} from "./actionTypes";

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: response.data});
};

export const handleToken = (token) => async dispatch => {
    const response = await axios.post('/api/stripe', token)
    dispatch({type: FETCH_USER, payload: response.data});
}

export const submitSurvey= values => async dispatch=> {
    const response = await axios.post('/api/surveys', values);
    dispatch({type: FETCH_USER, payload: response.data});
};
