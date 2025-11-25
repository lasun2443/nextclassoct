// import Link from "next/link";

// export default function adminLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex h-screen">

//           <div className="flex items-center justify-between">
//               <h1 className="text-2xl font-bold tracking-wide">Admin</h1>
//               <CartIcon /> {/* 🛒 Global cart icon */}
//           </div>

//         <div className="w-200 bg-amber-900 text-white text-lg h-lvh overflow-auto flex flex-col gap-2 p-4">
//         <Link className="hover:text-gray-200 transition" href="/admin">Admin</Link>

//         <Link className="hover:text-gray-200 transition" href="/admin/dashboard">Dashboard</Link>

//         <Link className="hover:text-gray-200 transition" href="/admin/products">Products</Link>

//         </div>
//         {children}
//     </div>
    
//   );
// }

import Link from "next/link";
;

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* ===== Sidebar ===== */}
            <aside className="w-64 bg-amber-900 text-white h-full overflow-y-auto flex flex-col justify-between">
                <div className="p-6 flex flex-col gap-6">
                

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-3 text-sm font-medium">
                        <Link className="hover:text-gray-200 transition" href="/admin">
                            Home
                        </Link>
                        <Link className="hover:text-gray-200 transition" href="/admin/dashboard">
                            Dashboard
                        </Link>
                        <Link className="hover:text-gray-200 transition" href="/admin/products">
                            Products
                        </Link>
                        <Link className="hover:text-gray-200 transition" href="/admin/cart">
                            Carts
                        </Link>

                        <Link className="hover:text-gray-200 transition" href="/new-client-product">
                            New-client-Product
                        </Link>
                        {/* <Link className="hover:text-gray-200 transition" href="/c">
                        </Link> */}
                        <Link className="hover:text-gray-200 transition" href="/addProducts">
                            Add Products
                        </Link>

                        <Link className="hover:text-gray-200 transition" href="/components/ProductListS">
                            ProductListS
                        </Link>

                    </nav>
                </div>

                
            </aside>

            {/* ===== Main Content ===== */}
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
    );
}