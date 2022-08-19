import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./Type"

export const Fetchshop=(FormData)=>async (dispatch) =>{
    dispatch({
        type:USER_LOGIN_REQUEST
    })
        try{
            const res=await axios.get("https://fakestoreapi.com/products")
            // console.log(res)
            dispatch({
                type:USER_LOGIN_SUCCESS,
                playload:res
            })
        }  
        catch(error){
            console.log(error)
            dispatch({
                type:USER_LOGIN_FAILED,
            })
        }
        
}


