import UserModel from "@/models/user";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, ctx:  RouteContext <'/api/users/[_id]'>) => {
    try{
        const {_id} = await ctx.params; 

    await dbConnect ();
    const user = await UserModel.findById(_id);


    if(!user){
        return NextResponse.json({
            success:false,
            message: "User not found "
        })
    }

    return NextResponse.json({
        success: true,
        user
    })
    } catch (error){
        return NextResponse.json({
            success: false,
            message: "Invalid credentials"

        }, {status:500})
    }

}