
const initialState = {
    profile:null,
    profiles:[],
    repos:[],
    loading:true,
    error:{}
}

export default (state = initialState,action) =>{
    const {type,payload} = action;
    return state
}