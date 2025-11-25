"use client"
import { addProduct } from "@/utils/action"
import { useRouter } from "next/navigation";
import { useRef, useTransition } from "react"



const Page = () => {
    const [isPending, startTransition] = useTransition();
    const productImg = useRef<HTMLInputElement>(null)
    const productPrice = useRef<HTMLInputElement>(null)
    const productTitle = useRef<HTMLInputElement>(null)
    const productDescription = useRef<HTMLInputElement>(null)

    const route = useRouter()

    const postProduct = async () => {
        const img = productImg.current?.value
        const price = productPrice.current?.value
        const title = productTitle.current?.value
        const description = productDescription.current?.value

        if (img && price && title) {
            startTransition(async () => {
                const result = await addProduct({ title, description: "", price, image: img })
                if (result && 'success' in result && result.success) {
                    route.push('/admin/products')
                } else if (result && 'message' in result) {
                    alert(result.message)
                }
            })
        }

    }

    return (
        <div className="bg-neutral-100 flex justify-center items-center h-screen w-full">
            <div className="h-85 w-120 bg-white rounded shadow-lg px-10 py-5 flex flex-col gap-5">
                <h1 className="text-2xl text-center font-bold ">Add Product</h1>
                <input
                    ref={productImg}
                    type="text"
                    placeholder="image url"
                    className="border-neutral-300 border h-10 bg-neutral-50 rounded-lg pl-2"
                />
                <input
                    ref={productPrice}
                    type="text"
                    className="border-neutral-300 border h-10 bg-neutral-50 rounded-lg pl-2"
                    placeholder="price"
                />
                <input
                    ref={productTitle}
                    type="text"
                    className="border border-neutral-300 h-10 bg-neutral-50 rounded-lg pl-2"
                    placeholder="title"
                />
                
                <button
                    onClick={postProduct}
                    className="bg-green-600 hover:bg-green-700 text-white h-10 rounded capitalize transition duration-200"
                >{
                        isPending ? "Adding...." : 'Add Product'
                    }</button>

            </div>
        </div>
    )
}

export default Page;