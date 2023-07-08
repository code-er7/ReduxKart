import React from 'react'
import HomeCard from './HomeCard'

const Home = () => {
  const items = [
    {
      id: "asdmlfasf",
      name: "macbook",
      price: 2200,
      quantity:1

    },
    {
      id: "asdfnnafbsdsf",
      name: "ipad",
      price: 225200,
      quantity:1

    },
    {
      id: "asdhygbfasf",
      name: "IWatch",
      price: 100,
      quantity:1

    }
  ]
  return (
    items.map((i) => {
      return <HomeCard
        key={i.key}
        id={i.id}
        name={i.name}
        price={i.price}
        quantity={i.quantity}
      />
    })
  )
}

export default Home