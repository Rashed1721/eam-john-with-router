import React from 'react';
import { useState } from 'react';
import useProducts from '../../Hooks/UseProducts'



const OrderReview = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;