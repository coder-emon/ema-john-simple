import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, name, seller, stock, price}= props.product;
    return (
        <div className='product'>
            <div div className ='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>
                    <small>by {seller}</small>
                </p>
                <div className="product-description">
                    <div>
                        <p>
                            $ {price}
                        </p>
                        <p>
                            <small>only {stock} left in stock - order soon</small>
                        </p>
                        <button className ='myBtn' onClick={()=> {props.handleAddProducts(props.product)}}> <FontAwesomeIcon icon={faShoppingCart} /> < span > add to cart </span></button >
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;