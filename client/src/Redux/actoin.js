import * as types from "./actionType";
import axios from "axios";

export const addSeat = (payload)=>(dispatch)=>{
    dispatch({type:types.SEATS,payload})
}

export const makePayment=(payload)=>{
    
    var amount = 0;
    payload.map(item=>{
        amount+=item.cost
    })
    console.log(amount);
    axios.post('http://localhost:3002/pay', {
        "amount":"amount"
      })
      .then(function (response) {      
        console.log(response)
        window.open(`${response.data.url}${amount*100}`)
      })
      .catch(function (error) {
        console.log(error);
      });
}