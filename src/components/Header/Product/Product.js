import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className = 'product'>
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div>
                <h4 className = 'product-name'><Link to={'/product/'+key}>{name}</Link></h4><br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showBtn === true && <button className="button" onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
            

        </div>
    );
};

export default Product;