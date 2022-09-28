import axios from "axios"
import { toast } from "react-toastify";
import http from "../utils/axios";
import { url } from "../utils/constants"
import { setAlert } from "./alert";
import { ADD_BLOG, BLOG_ERROR, DELETE_MY_BLOG, GET_BLOGS, GET_MY_BLOG, GET_SINGLE_BLOG, SINGLE_BLOG_ERROR, UPDATE_LIKES, UPDATE_VIEWS } from "./types";

export const getBlogs = () => async dispatch => {

    try {
        const res = await http.get(`${url}/posts`);
        dispatch({
            type: GET_BLOGS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: BLOG_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            }
        })
    }
}

export const getBlog = (id) => async dispatch => {

    try {
        const res = await http.get(`${url}/posts/${id}`);

        dispatch({
            type: GET_SINGLE_BLOG,
            payload: res.data
        })
    } catch (error) {
        // dispatch({
        //     type: SINGLE_BLOG_ERROR,
        //     payload: {
        //         msg: error.response.statusText,
        //         status: error.response.status,
        //     }
        // })
    }
}
export const getMyBlog = () => async dispatch => {

    try {
        const res = await http.get(`${url}/posts/me`);

        dispatch({
            type: GET_MY_BLOG,
            payload: res.data
        })
    } catch (error) {

    }
}
export const deleteMyBlog = (id) => async dispatch => {

    try {
        const res = await http.delete(`${url}/posts/${id}`);

        dispatch({
            type: DELETE_MY_BLOG,
            payload: id
        })
    } catch (error) {

    }
}

export const addBlog = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    try {
        const res = await http.post(`${url}/posts`, body, config);
        dispatch({
            type: ADD_BLOG,
            payload: res.data
        })

        toast.success('Blog Added !')
    } catch (error) {
        const errors = error.response.data.errors || error.response.data
        if (errors) {
            errors.forEach((error) => toast.error(error.msg));
        }
    }
}

export const addLike = id => async dispatch => {


    try {
        const res = await http.put(`${url}/posts/like/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
    } catch (error) {
        const errors = error.response.data.errors || error.response.data
        if (errors) {
            errors.forEach((error) => toast.error(error.msg));
        }
        dispatch({
            type: BLOG_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            }
        })
    }
}

export const removeLike = id => async dispatch => {
    try {
        const res = await http.put(`${url}/posts/unlike/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
    } catch (error) {
        dispatch({
            type: BLOG_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            }
        })
    }
}

export const addView = id => async dispatch => {


    try {
        const res = await http.put(`${url}/posts/views/${id}`);
        dispatch({
            type: UPDATE_VIEWS,
            payload: { id, views: res.data }
        })
    } catch (error) {
        const errors = error.response.data.errors || error.response.data
        if (errors) {
            errors.forEach((error) => toast.error(error.msg));
        }
        dispatch({
            type: BLOG_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            }
        })
    }
}