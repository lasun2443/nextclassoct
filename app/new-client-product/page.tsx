// "use client";

// import { addProduct } from "@/utils/action";
// import { useRouter } from "next/navigation";
// import { useRef, useTransition } from "react";



// const Page = () => {
//     const titleRef = useRef<HTMLInputElement>(null);
//     const descriptionRef = useRef<HTMLInputElement>(null);
//     const priceRef = useRef<HTMLInputElement>(null);
//     const imageRef = useRef<HTMLInputElement>(null);
//     const router = useRouter();

//     // const [state, action, pending] = useActionState(addProduct, false);
//     const [isPending, startTransition] = useTransition();
//     const uploadProduct = async () => {
//         const title = titleRef.current?.value
//         const description = descriptionRef.current?.value
//         const price = priceRef.current?.value
//         const image = imageRef.current?.value

//         if (title && description && price && image) {
//             // await addProduct({
//             //     title,
//             //     description,
//             //     price,
//             //     image

//             startTransition(async () => {
//                 await addProduct({ title, description, price, image });
//             })
//         }
//     }
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-200">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//                     New Product Page
//                 </h3>

//                 <div className="space-y-4">
//                     <input
//                         type="text"
//                         name="title"
//                         ref={titleRef}
//                         placeholder="Product Title"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />

//                     <input
//                         type="text"
//                         name="description"
//                         ref={descriptionRef}
//                         placeholder="Product Description"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />

//                     <input
//                         type="number"
//                         name="price"
//                         ref={priceRef}
//                         placeholder="Product Price"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />

//                     <input
//                         type="text"
//                         name="image"
//                         ref={imageRef}
//                         placeholder="Product Image URL"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                 </div>


                

//                 <button
//                     onClick={uploadProduct}
//                 >
//                     {isPending ? "Submitting..." : "Submit"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Page;



// "use client"
// import { addProduct } from "@/utils/product"
// import { useRouter } from "next/navigation";
// import { useRef, useTransition } from "react"


// const Page = () => {
//     const [isPending, startTransition] = useTransition();
//     const productImg = useRef<HTMLInputElement>(null)
//     const productPrice = useRef<HTMLInputElement>(null)
//     const productTitle = useRef<HTMLInputElement>(null)

//     const route = useRouter()

//     const postProduct = async () => {
//         const img = productImg.current?.value
//         const price = productPrice.current?.value
//         const title = productTitle.current?.value

//         if (img && price && title) {
//             startTransition(async () => {
//                 const result = await addProduct({ img, price, title })

//             })
//             route.push('/admin/product')
//         }

//     }

//     return (
//         <div className="bg-neutral-100 flex justify-center items-center h-screen w-full">
//             <div className="h-85 w-120 bg-white rounded shadow-lg px-10 py-5 flex flex-col gap-5">
//                 <h1 className="text-2xl text-center font-bold ">Add Product</h1>
//                 <input
//                     ref={productImg}
//                     type="text"
//                     placeholder="image url"
//                     className="border-neutral-300 border h-10 bg-neutral-50 rounded-lg pl-2"
//                 />
//                 <input
//                     ref={productPrice}
//                     type="text"
//                     className="border-neutral-300 border h-10 bg-neutral-50 rounded-lg pl-2"
//                     placeholder="price"
//                 />
//                 <input
//                     ref={productTitle}
//                     type="text"
//                     className="border border-neutral-300 h-10 bg-neutral-50 rounded-lg pl-2"
//                     placeholder="title"
//                 />
//                 {/* <input type="text" /> */}
//                 <button
//                     onClick={postProduct}
//                     className="bg-green-600 hover:bg-green-700 text-white h-10 rounded capitalize transition duration-200"
//                 >{
//                         isPending ? "Adding...." : 'Add Product'
//                     }</button>

//             </div>
//         </div>
//     )
// }

// export default Page