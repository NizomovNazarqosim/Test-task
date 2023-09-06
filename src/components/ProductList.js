import './ProductList.css'

import React from "react";

import ProductCard from "./ProductCard";

const ProductList = (products ) => {
    console.log(products, 'ProductList')
    return (
        <div className='crypto_list'>
            {products.products.map((product, index) => {
                   return (
                    <ProductCard
                        key={index}
                        title={product.title}
                        price={product.price}
                    />
                   )
            })}
        </div>
    );
};

export default ProductList;