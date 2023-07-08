import React from 'react'
import {  useSelector } from 'react-redux';
import CartCard from './CartCard';

const Cart = () => {
    const { items , total } = useSelector(state => state.KartR);
    

    return (
        <div>
            {
                items.map((element) => {
                    return (
                        <CartCard
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            price={element.price}
                            quantity={element.quantity}
                        />
                    )
                })
            }
            {<h1>{total}</h1>}

        </div>
    )
}

export default Cart