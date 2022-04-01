import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './Stateprovider'

function CheckoutProduct({ id, image, title, rating, price, hideButton }) {
    const removeFromBasket = () => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='checkoutproduct'>
        <img src={image} alt="" className='checkoutproduct__image'/>

        <div className="checkoutproduct__info">
            <p className='checkoutproduct__title'>{title}</p>
            <p className="checkout__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct__rating">
            {Array(rating).fill().map((_, i) =>(
                <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>

    </div>
  )
}

export default CheckoutProduct