import mongoose, { model, models } from "mongoose";

// import {schema} from "mongoose";
// const preductSchema = new Schema({})

interface IProduct {
    title: string;
    price: number
}

const productSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.models.Product<IProduct> || model("Product", productSchema);

export default ProductModel;

// "use server"

// import { refresh, revalidatePath } from "next/cache"
// import productModel from "../models/product"
// import dbConnect from "../utils/dbConnect"

// export const addProduct =async(product:{img:string, price:string, title:string})=>{
//     await dbConnect()
//     const priceToNum = parseFloat(product.price)
//     if(isNaN(priceToNum)){
//         throw new Error(
//             "Must be a number",
//         );
//     }
//     const post= {
//         image:product.img,
//         price:priceToNum,
//         title:product.title
//     }

//     console.log(post)

//     let created = await productModel.create(post)
//     console.log(created)
//     revalidatePath('/admin/product')
//     return post
// }


// export const fetchProduct = async()=>{
//     await dbConnect()
//     let products = await productModel.find()

//     const result = products.map((product)=>(
//         {
//             image: product.image,
//             price: product.price,
//             title: product.title,
//             id:   product._id.toString()
//         }
//     )) 
//     console.log(result)
//     return result

// }

// export const getproductTitle =async(id:{id:string})=>{
//     await dbConnect()
//     let userid = id.id
//     if(userid){
//         let user = await productModel.findOne({_id:userid})
//         return user.title
//     }

// }

// export const deleteProduct =async(iD:{id:string})=>{
//     await dbConnect()
//     const id = iD.id!
//     if(id){
//         const form = await productModel.findByIdAndDelete(id)
//         refresh()
//         revalidatePath('/admin/product')
//     }
// }