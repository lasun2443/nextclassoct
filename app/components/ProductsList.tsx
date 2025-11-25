
"use client"

// import React, { use, useEffect, useState } from 'react';

// interface Product {
//   id: number;
//     title: string;
//     description: string;
//     price: number;
//     image: string;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//    useEffect(() => {
//     const fetchProducts = async () => {
//         const res = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
//         setProducts(res);
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-10  0 h-screen overflow-auto">
//       <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//         {products.map(product => (
//           <div key={product.id}
//             className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
//             <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-3" />
//             <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
//             <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
//             <div>
//               <span className="font-bold text-green-600">${product.price}</span>
//               <button className="bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-amber-600">
//                 Buy
//               </button>
//             </div>
//             {/* <p>Price: ${product.price}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


// "use client"

// import React, { useEffect, useState } from 'react';
// import ProductSkeleton from "./ProductSkeleton";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch('https://fakestoreapi.com/products')
//         .then((res) => res.json());

//       setProducts(res);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 h-screen overflow-auto">
//       <h1 className="text-2xl font-bold text-center mb-6">Products</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {loading
//           ? [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
//           : products.map(product => (
//             <div
//               key={product.id}
//               className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-contain mb-3"
//               />
//               <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
//               <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="font-bold text-green-600">${product.price}</span>
//                 <button className="bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-amber-600">
//                   Buy
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;




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

import React, { useEffect, useState } from "react";
import ProductSkeleton from "./ProductSkeleton";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const start = Date.now();

      const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json());

      // ensure skeleton stays at least 1.2s
      const elapsed = Date.now() - start;
      const minDuration = 1200;

      setTimeout(() => {
        setProducts(res);
        setLoading(false);
      }, Math.max(0, minDuration - elapsed));
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-black-100 min-h-screen overflow-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => (
            <div
                key={product.id}
              className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-black soft-reveal"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
              />
              <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-green-600">${product.price}</span>
                <button className="bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-amber-600">
                  Buy
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;



