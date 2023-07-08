import React from 'react'
import { useDispatch } from 'react-redux';

const HomeCard = ({name , id , price , quantity}) => {
  const disPatch = useDispatch();
  const AddToCart = ()=>{
        disPatch({
            type:"addToKart",
            payload:{
                name,
                id ,
                price ,
                quantity
            }
        })
  }
  return (
    <div>
        <br />
        <button onClick={AddToCart}>
            <h3>{name}</h3>
            <h2>{price}</h2>
        </button>
        <br />
    </div>
  )
}

export default HomeCard