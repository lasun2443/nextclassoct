import ProductModel from "@/models/product";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: Promise<{ _id: string }> }) => {

    const { _id } = await params;
    const product = await ProductModel.findById(_id)
    // console.log(product);
    
    const metadata: Metadata = {
        title: `Product Details`,
        description: `This is the details page for product with ID: ${_id}`,
        openGraph: {
            images: {
                url: ""
            }
        }
    }
    return metadata;
}


const page = async ({ params }: { params: Promise<{ _id: string }> }) => {
    const { _id } = await params;
    return <div>
z
        <h1>This is a single product with ID: ({_id}) page</h1>
        {/* <Image 
        src={`https://fakestoreapi.com/products/${id}`}
        alt="Product Image"
        width={300}
        height={300}
        /> */}
    </div>


}

export default page;