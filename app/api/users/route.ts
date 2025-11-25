// import dbConnect from "@/lib/dbConnect";
// import Product from "@/models/Product";

import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//     await dbConnect();
//     const products = await Product.find({});

//     return Response.json(products);
// }


export const GET = async (req: NextRequest, res: NextResponse) =>{

    const users = await UserModel.find()
    
    // const users = [
    //     { firstname: "Felix", Lastname:"Adegboyega", age:16},
    //     { firstname: "Felix", Lastname:"Adegboyega", age:16},
    //     { firstname: "Felix", Lastname:"Adegboyega", age:16},
    //     { firstname: "Felix", Lastname:"Adegboyega", age:16}
    // ]

    return NextResponse.json({ success: true, users})
}

export const PUT = async ( ) => {

}
export const DELETE = async ( ) =>{
    
}