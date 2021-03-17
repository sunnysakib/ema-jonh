import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Header/Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const product = fakeData.find(pd => pd.key === key);
    console.log(product);
    return (
        <div>
            <h2>Product Detail</h2>
            <Product showBtn={false} product ={product}></Product>
        </div>
    );
};

export default ProductDetail;