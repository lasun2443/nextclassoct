// import Image from 'next/image'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='text-2xl text-amber-800'>This is the dashboard page
//       {/* <Image
//         className=''
//         src={'/splash1.avif'}
//         alt='cup'
//         width={200}
//         height={300}
//       />

//       <Image
//         className=''
//         src={"https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BsYXNofGVufDB8fDB8fHww"}
//         alt='cup'
//         width={200}
//         height={300}
//       /> */}
//     </div>
//   )
// }

// export default page

import Image from "next/image";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  // Dummy product (replace with API or database later)
  const product = {
    id,
    name: "Samsung Galaxy A06 6.7'' 4GB RAM / 64GB ROM - Black",
    brand: "Samsung",
    price: 112500,
    oldPrice: 118125,
    discount: "-5%",
    image:
      "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?w=600&auto=format&fit=crop&q=60",
    ratings: 279,
    stars: 4.5,
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT: IMAGE */}
        <div className="border rounded-xl p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* RIGHT: PRODUCT INFORMATION */}
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          <p className="text-sm text-gray-500 mt-1">
            Brand: <span className="text-amber-700">{product.brand}</span>
          </p>

          {/* Price Section */}
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-amber-700">
                ₦{product.price.toLocaleString()}
              </p>
              <p className="line-through text-gray-500">₦{product.oldPrice.toLocaleString()}</p>
              <p className="text-green-600 font-bold">{product.discount}</p>
            </div>
          </div>

          {/* Ratings */}
          <p className="mt-3 text-yellow-600">
            ⭐⭐⭐⭐⭐ <span className="text-gray-600">({product.ratings} ratings)</span>
          </p>

          {/* Add to Cart */}
          <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white w-full py-3 rounded-lg font-semibold">
            Add to cart
          </button>

          {/* Location dropdown
          <div className="mt-6 border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Choose your location</h3>

            <select className="w-full border p-2 rounded mb-3">
              <option>Osun</option>
              <option>Oyo</option>
              <option>Lagos</option>
            </select>

            <select className="w-full border p-2 rounded">
              <option>Osogbo</option>
            </select>
          </div> */}

          {/* Shipping */}
          {/* <div className="mt-4 p-4 border rounded-lg">
            <p className="font-semibold">Shipping</p>
            <p className="text-gray-600">
              + Delivery fee ₦950 to <span className="font-bold">OSOGBO</span>
            </p>
          </div> */}

        </div>
      </div>
    </div>
  );
}
