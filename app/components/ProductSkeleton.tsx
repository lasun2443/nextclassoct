// export default function ProductSkeleton() {
//     return (
//         <div className="border rounded-2xl p-4 shadow bg-white">
//             <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md mb-3" />

//             <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2" />
//             <div className="h-3 bg-gray-200 animate-pulse rounded w-full mb-2" />
//             <div className="h-3 bg-gray-200 animate-pulse rounded w-5/6 mb-4" />

//             <div className="flex justify-between items-center">
//                 <div className="h-4 w-16 bg-gray-200 animate-pulse rounded" />
//                 <div className="h-8 w-20 bg-gray-200 animate-pulse rounded" />
//             </div>
//         </div>
//     );
// }


// export default function ProductSkeleton() {
//     return (
//         <div className="border rounded-2xl p-4 shadow bg-white">
//             <div className="w-full h-48 bg-gray-200 rounded-md mb-3 shimmer" />

//             <div className="space-y-2">
//                 <div className="h-4 bg-gray-200 rounded w-3/4 shimmer" />
//                 <div className="h-4 bg-gray-200 rounded w-full shimmer" />
//                 <div className="h-4 bg-gray-200 rounded w-2/3 shimmer" />
//             </div>

//             <div className="flex justify-between items-center mt-4">
//                 <div className="h-4 w-16 bg-gray-200 rounded shimmer" />
//                 <div className="h-8 w-20 bg-gray-200 rounded shimmer" />
//             </div>
//         </div>
//     );
// }

// export default function ProductSkeleton() {
//     return (
//         <div className="rounded-2xl p-4 shadow bg-gray-50 border border-gray-200 animate-pulse">
//             {/* Product Image */}
//             <div className="w-full h-48 bg-gray-300 rounded-lg mb-4" />

//             {/* Title */}
//             <div className="h-4 bg-gray-300 rounded w-4/5 mb-3" />

//             {/* Description Lines */}
//             <div className="h-3 bg-gray-300 rounded w-full mb-2" />
//             <div className="h-3 bg-gray-300 rounded w-5/6 mb-4" />

//             {/* Price + Button Row */}
//             <div className="flex justify-between items-center">
//                 {/* Price */}
//                 <div className="h-4 w-20 bg-gray-300 rounded" />

//                 {/* Button */}
//                 <div className="h-8 w-24 bg-gray-300 rounded-lg" />
//             </div>
//         </div>
//     );
// }


// const ProductSkeleton = () => {
//     return (
//         <div className="border rounded-2xl p-4 shadow bg-white relative overflow-hidden">

//             {/* Shimmer layer */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none"></div>

//             {/* Image skeleton */}
//             <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>

//             {/* Title skeleton */}
//             <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

//             {/* Description skeleton */}
//             <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
//             <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

//             {/* Price & Button */}
//             <div className="flex justify-between items-center">
//                 <div className="h-5 bg-gray-200 rounded w-1/4"></div>
//                 <div className="h-8 bg-gray-300 rounded-lg w-20"></div>
//             </div>
//         </div>
//     );
// };
// export default ProductSkeleton;


// const ProductSkeleton = () => {
//     return (
//         <div className="border rounded-2xl p-4 shadow bg-white animate-pulse">
//             {/* Image Skeleton */}
//             <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>

//             {/* Title lines */}
//             <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

//             {/* Description lines */}
//             <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
//             <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

//             {/* Price + Button */}
//             <div className="flex justify-between items-center">
//                 <div className="h-5 bg-gray-200 rounded w-1/4"></div>
//                 <div className="h-8 bg-gray-300 rounded-lg w-20"></div>
//             </div>
//         </div>
//     );
// };

// export default ProductSkeleton;


const ProductSkeleton = () => {
    return (
        <div className="border rounded-xl p-5 shadow bg-white animate-ms-pulse">
            {/* Image */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>

            {/* Title */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>

            {/* Short description line */}
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>

            {/* Footer */}
            <div className="flex justify-between items-center">
                <div className="h-5 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-300 rounded-lg w-20"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
