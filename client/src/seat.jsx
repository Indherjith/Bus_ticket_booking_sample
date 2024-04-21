import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSeat } from './Redux/actoin';

const Seat = (props) => {
    
    const data = props
    const selected = useSelector(store=>store.seats);
    const dispatch = useDispatch();
    const dataItem = selected.find(elem=>(elem.id == props.id));
    const color = dataItem ?( dataItem.color ) : ("white");    

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:color}} onClick={async(e)=>{
        if(color == "white"){
            let obj = {...data,color:"blue"}
            let arr = [...selected,obj];
            dispatch(addSeat(arr))
        }
        else{
            let arr = selected.filter(elem=>(elem.id != data.id))
            dispatch(addSeat(arr))
        }
    }}>{data.seat}<br/>
    {data.cost}
    </div>
  )
}

export default Seat