import axios from "axios"
import { url } from "../utils/constants"

//current user profile
export const getMyProfile = () => async dispatch =>{

    try {
        const res = await axios.get(`${url}/profile/me`)
    } catch (error) {
        
    }
}