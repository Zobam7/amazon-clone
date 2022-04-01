import React from 'react'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './Stateprovider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="amaad2.png" alt="" className='checkout__ad' />

            <div className="">
                <h3 style={{paddingLeft: "10px"}}>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Shopping Cart</h2>
                {basket.map(item =>(
                  <CheckoutProduct
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                  />
                  ))}
            </div>
        </div>

        <div className="checkout__right">
            <h2><Subtotal/></h2>
        </div>
    </div>
  )
}

export default Checkout