import React from 'react'
import { useSelector } from 'react-redux'
import { makePayment } from './Redux/actoin';

const Proceed = () => {
    const selected = useSelector(store=>store.seats);
  return (
    <button style={{margin:0,padding:"10px 20px",fontSize:"1rem",color:"white",backgroundColor:"blue",border:"none",borderRadius:"5px"}} onClick={()=>{
        makePayment(selected)
    }}>Make Payment</button>
  )
}

export default Proceed