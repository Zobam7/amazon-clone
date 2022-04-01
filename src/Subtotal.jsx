import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const [{ basket}, dispatch] = useStateValue()
  const history = useHistory()

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText = {(value) => (
            <>
                <p>
                    <small>Subtotal ({basket.length} items)</small> <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" name="" id="" /><small>This order contains a gift</small>
                </small>
            </>
        )}
        decimalScale = {2}
        value = {getBasketTotal(basket)}
        displayType = {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
        />

        <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal