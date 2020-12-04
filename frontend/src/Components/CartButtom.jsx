import React from 'react'

function CartButtom(props){

    return (
      <div className="col">
        <div className="cart-buttom">
          <p className="cart-head">{props.data.text}</p>
          <p className="cart-body">{props.data.counter}</p>
        </div>
      </div>
    );
}

export default CartButtom;