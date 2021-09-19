import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'

const product=[
    "Grand Theft Auto VI",'red dead redemption 3','Half Life 3'
]

const ProductListPage = () => {

    const list = product.map(product=>(
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return ( 
        <div className="products">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            </div>
     );
}
 
export default ProductListPage;