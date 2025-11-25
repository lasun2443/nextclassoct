
// "use client"

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get<Product[]>('https://fakestoreapi.com/products');
//         setProducts(res.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-9 text-lg">Loading products...</div>;
//   }

//   return (
//     <div className="p-6 bg-gray-100 h-screen overflow-auto">
//       <h1 className="text-2xl font-bold text-center mb-6">products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-contain mb-3"
//             />
//             <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
//             <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//               {product.description}
//             </p>
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-green-600">${product.price}</span>
//               <button className="bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-amber-600">
//                 Buy
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '@/contexts/CartContext';
import CartIcon from '@/components/CartIcon';
import Link from 'next/link';


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true); // ✅ ADD THIS
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products');

            // ✅ Delay a bit so skeleton shows — feels realistic (MS Store vibes)
            setTimeout(() => {
                setProducts(data);
                setLoading(false);
            }, 1200);
        };

        fetchProducts();
    }, []);

    return (
        <div >

            {/* <div className={styles.card}></div> */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide text-amber-900">PRODUCTS</h1>
                <CartIcon />
            </div>

            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {loading ? (

                    [...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse border p-4 rounded-lg shadow-sm bg-white">
                            <div className="bg-gray-300 w-full h-32 rounded-lg mb-3"></div>
                            <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                            <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
                            <div className="bg-gray-300 h-8 w-full rounded"></div>
                        </div>
                    ))
                ) : (

                    products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-sm bg-white">
                            <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto" />
                            <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
                            <p className="text-black-600 font-bold">
                                <Link href={`/admin/products/${product.id}`}>
                                    ₦{product.price}
                                </Link>
                            </p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-3 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}


//     return (


//         <div >
//             <div className="flex items-center justify-between">
//                 <h1 className="text-2xl font-bold tracking-wide text-amber-900" > PRODUCTS</h1>
//                 <CartIcon /> {/* 🛒 Global cart icon */}
//             </div>
//             <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//                 {products.map((product) => (
//                     <div key={product.id} className="border p-4 rounded-lg shadow-sm bg-white">
//                         <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto" />
//                         <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
//                         <p className="text-black-600 font-bold">₦{product.price}</p>
//                         <button
//                             onClick={() => addToCart(product)}
//                             className="mt-3 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
//                         >
//                             Add to Cart
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }






// const Page = () => {
//     return (
//         <div>
//             <Suspense fallback={<div>Loading Products...</div>}>
//                 <ProductListS />
//             </Suspense>
//         </div>
//     )
// }