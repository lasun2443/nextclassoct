

import React from 'react'
import Link from 'next/link'
import { Product } from '@/app/utils/type'
import ProductListCL from '@/components/ProductListCL'

const ProductsListS = async () => {
    const products: Product[] = await fetch('https://fakestoreapi.com/products').then(res => res.json());

    return (
        <div>
            Products Page
            {products.map((each) =>(
                <>
                    <div key={each.id}>
                       <Link href={`/products/${each._id}`}>
                        {each.title}
                       </Link>
                    </div>
                    <ProductListCL />
                </>
            ))}
        </div>
    )
}