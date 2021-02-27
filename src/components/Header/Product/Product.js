import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className = 'product'>
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div>
                <h4 className = 'product-name'>{name}</h4><br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="button" onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            

        </div>
    );
};

export default Product;