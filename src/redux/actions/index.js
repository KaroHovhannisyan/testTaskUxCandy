/**
 *  Auth Actions with action creators
 **/
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED =  "LOGIN_FAILED";
export const attemptLogin = (data) => ({type: ATTEMPT_LOGIN, payload: data});
export const loginSuccess = (user) => ({type: LOGIN_SUCCESS, payload: user});
export const loginFailed = (error) => ({type: LOGIN_FAILED, payload: error});

/**
 * Task actions with action creators
 */
export const ATTEMPT_GET_TASKS = "ATTEMPT_GET_TASKS";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAIL = "GET_TASKS_FAIL";
export const attemptGetTasks = () => ({type: ATTEMPT_GET_TASKS});
export const getTasksSuccess = (data) => ({type: GET_TASKS_SUCCESS, payload: data});
export const getTasksFail = (error) => ({type: GET_TASKS_FAIL, payload: error});

/**
 * Post task action creators
 */
export const ATTEMPT_POST_TASK = "ATTEMPT_POST_TASK";
export const POST_TASK_SUCCESS = "POST_TASK_SUCCESS";
export const POST_TASK_FAIL = "POST_TASK_FAIL";
export const attemptPostTask = (data) => ({type: ATTEMPT_POST_TASK, payload: data});
export const postTaskSuccess = (data) => ({type: POST_TASK_SUCCESS, payload: data});
export const postTaskFail = (error) => ({type: POST_TASK_FAIL, payload: error});
