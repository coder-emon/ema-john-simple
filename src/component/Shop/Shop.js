import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
       
    }, []);
    return (
        <div>
            {console.log(products)}
        </div>
    );
};

export default Shop;