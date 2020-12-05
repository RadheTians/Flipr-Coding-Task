import Axios from "axios";
import Cookie from 'js-cookie';

import {
    API_SIGNIN_REQUEST,
    API_SIGNIN_SUCCESS,
    API_SIGNIN_FAIL,
    API_REGISTER_REQUEST,
    API_REGISTER_SUCCESS,
    API_REGISTER_FAIL,
    API_LOGOUT,
    API_UPDATE_REQUEST,
    API_UPDATE_SUCCESS,
    API_UPDATE_FAIL
} from "./Constents";

const token = "tTU3gFVUdP";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const callAPI = (email) => async(dispatch) => {

    dispatch({ type: API_SIGNIN_REQUEST, payload: { email} });
    try {
        const { data } = await Axios.post(
            "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
            {email : email},
            config
            );
        if(data){
            dispatch({ type: API_SIGNIN_SUCCESS, payload: data.data });
            Cookie.set('APIInfo', JSON.stringify(data));
        } else {
            dispatch({ type: API_SIGNIN_FAIL, payload: "error" });
        }
        
    } catch (error) {
        dispatch({ type: API_SIGNIN_FAIL, payload: error.message });
    }
}
export default callAPI;