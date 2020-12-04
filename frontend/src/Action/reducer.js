import { API_SIGNIN_REQUEST, API_SIGNIN_SUCCESS, API_SIGNIN_FAIL, API_REGISTER_REQUEST, API_REGISTER_SUCCESS, API_REGISTER_FAIL, API_LOGOUT, API_UPDATE_REQUEST, API_UPDATE_SUCCESS, API_UPDATE_FAIL }
from "./Constents";


function APIReducer(state = {}, action) {
    switch (action.type) {
      case API_SIGNIN_REQUEST:
        return { loading: true };
      case API_SIGNIN_SUCCESS:
        return { loading: false, APIInfo: action.payload };
      case API_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case API_LOGOUT:
        return {};
      default: return state;
    }
  }

export default APIReducer;