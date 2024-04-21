import * as types from "./actionType";

const initState = {
    data:{},
    seats:[]
}

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.ORDER:
            return {...state,data:payload};
        case types.SEATS:
            return {...state,seats:payload};
        default:
            return {...state};
    }
}