import { ADD_BLOG, BLOG_ERROR, DELETE_MY_BLOG, GET_BLOGS, GET_MY_BLOG, GET_SINGLE_BLOG, SINGLE_BLOG_ERROR, UPDATE_LIKES, UPDATE_VIEWS } from "../actions/types";

const initialState = {
    blogs: [],
    blog: null,
    likedUsers:[],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_BLOGS:
        case GET_MY_BLOG:
            return {
                ...state,
                blogs: payload,
                loading: false
            }
        case ADD_BLOG:
            return {
                ...state,
                blogs: [payload, ...state.blogs],
                loading: false
            };
        case BLOG_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case GET_SINGLE_BLOG:
            return {
                ...state,
                blog: payload.post,
                likedUsers:payload.likedUsers,
                loading: false
            }
 
        case UPDATE_LIKES:
            return {
                ...state,
                blogs: state.blogs.map((blg) => blg._id === payload.id ? { ...blg, likes: payload.likes } : blg),
                loading: false
            }
        case DELETE_MY_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blg=>blg._id !== payload),
                loading: false
            }
        case UPDATE_VIEWS:
            return {
                ...state,
                blogs: state.blogs.map((blg) => blg._id === payload.id ? { ...blg, views: payload.views } : blg),
                loading: false
            }

        default:
            return state
    }
}