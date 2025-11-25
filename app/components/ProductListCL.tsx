"use client";

import React from 'react';
import useSWR from 'swr';
import { Product } from '../utils/type';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const ProductList = () => {

    const response = useSWR<Product[]>('https://fakestoreapi.com/products', fetcher);

       if(response.isLoading) return <div>Product is fetching...</div>;
       if(response.error) return <div>Error loading products.</div>;
    return (
        <div>
            {response.data && response.data.map((each) => <div key={each.id}></div>)}
            
        </div>
    );
};

export default ProductList;
