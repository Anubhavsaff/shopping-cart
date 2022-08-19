import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "./Type";
const initialState={
    shop:{}
}
export const userReducer=(state=initialState,action) =>{
    const{type,playload}=action;
    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            };
            case USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    shop:playload
                }
                default:
                    return state;
    }
}                                             