/**
 *  Auth Actions with action creators
 **/
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED =  "LOGIN_FAILED";
export const attemptLogin = (data) => ({type: ATTEMPT_LOGIN, payload: data});
export const loginSuccess = (user) => ({type: LOGIN_SUCCESS, payload: user});
export const loginFailed = (error) => ({type: LOGIN_FAILED, payload: error});

