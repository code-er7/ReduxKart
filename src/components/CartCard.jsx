import React from 'react'
import { useDispatch } from 'react-redux';

const CartCard = ({id , name , price , quantity}) => {
   
    const disPatch = useDispatch();
    const plus =()=>{
        disPatch({
            type:"increment",
            payload:id
        })
    }
    const minus =()=>{
        disPatch({
            type:"decrement",
            payload:id
        })
    }
  return (
    <div>
        <br />
           <h1>{name}</h1>
           <h2>{price}</h2>
           <h3>{quantity}</h3>
           <button onClick={plus}>increment</button>
           <button onClick={minus}>decrement</button>
        <br />
        
    </div>
  )
}

export default CartCard