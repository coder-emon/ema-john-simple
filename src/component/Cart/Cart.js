import React from 'react';
import './Cart.css';
const Cart = (props) => {
 const cart =props.cart;
    let total = 0;
    let shipping =0;
    // let quantity =0;
    // for(const product of cart){
    //     console.log(product)
    //     quantity= quantity + product.length;
    //     total = total + product.price * product.length;
    //     shipping = shipping + product.shipping;
    // }
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+ product.price;
        shipping= shipping + product.shipping;
    }
    console.log(shipping)
    const tax =parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax  ;
    const tbt = total + shipping;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
      return( 
       <div className='cart'>
            <h4>Order summary</h4>
            <p>Item Ordered: {cart.length} </p>
            <p>Shipping & Handling: {formatNumber(shipping)}</p>
            <p>Total before tax: {formatNumber(tbt)}</p>
            <p>Estimated Tax: {tax}</p>
            <p>Order Total: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;