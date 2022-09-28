import axios from "axios";
import http from "../utils/axios";
import { url } from "../utils/constants";
import { setAuthToken } from "../utils/setAuthToken";
import { setAlert } from "./alert";
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from "./types";

//load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await http.get(`${url}/auth`);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//register
export const register = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);

    try {
        const res = await http.post(`${url}/users`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors || error.response.data

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}

//login
export const login = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(formData)
        const { data } = await http.post(`${url}/auth`, body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        dispatch(loadUser())

    } catch (error) {
        //fail or error
        const errors = error.response.data.errors || error.response.data
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

//logout
export const logout = () => ({type:LOGOUT})
