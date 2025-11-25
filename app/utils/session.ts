// session part..
import { jwtVerify, SignJWT } from "jose";
import "server-only"
import { cookies } from "next/headers";
import dbConnect from "./dbConnect";
import UserModel from "../models/user";

const encodedkey = new TextEncoder().encode(process.env.JWT_SECRET);



export const encrypt = (payload: { _id: string }) => {
    const token = new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("2d")
        .sign(encodedkey);
    return token
}
// Define your custom payload type
interface MyJWTPayload {
    _id: string;
}

export const decrypt = async (token: string): Promise<{ success: true; _id: string } | { success: false }> => {
    try {
        console.log("🔐 Decrypting token:", token);

        // Use generic type to specify the payload structure
        const { payload } = await jwtVerify<MyJWTPayload>(token, encodedkey, {
            algorithms: ["HS256"]
        });

        console.log("✅ Token decrypted successfully:", payload);

        // Now TypeScript knows payload has _id
        if (payload && payload._id) {
            return { success: true, _id: payload._id };
        } else {
            console.error("❌ Invalid token payload structure");
            return { success: false };
        }
    } catch (error) {
        console.error("❌ Token decryption failed:", error);
        return { success: false };
    }
}

export const auth = async (): Promise<{ success: true; _id: string } | { success: false }> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return { success: false };
    }

    const result = await decrypt(token);
    return result;
}

export const verifyUser = async (): Promise<{
    success: true;
    message: string;
    user: {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
    }
} | {
    success: false;
    message: string
}> => {
    const result = await auth();

    if (!result.success) {
        return { success: false, message: "Invalid token" }
    }

    await dbConnect();
    const user = await UserModel.findById(result._id)

    if (!user) {
        return { success: false, message: "User not found" }
    }

    return {
        success: true,
        message: "Valid token",
        user: {
            _id: user._id.toString(),
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        }
    }
}
















































































// import UserModel from "@/models/user";
// import { jwtVerify, SignJWT } from "jose";
// import "server-only";
// import dbConnect from "./dbConnect";
// const encodedkey = new TextEncoder().encode(process.env.JWT_SECRET);

// export const encrypt = (payload: { _id: string }) => {
//   const token = new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256", typ: "JWT" })
//     .setIssuedAt()
//     .setExpirationTime("2d")
//     .sign(encodedkey);
//   return token;
// };

// export const decrypt = async (token: string) => {
//   try {
//     const { payload } = await jwtVerify(token, encodedkey, {
//       algorithms: ["HS256"],
//     }); //payload is of type JWTPayload {payload : {id:""}}
//     return { ...payload, success: true };
//   } catch (error) {
//     return { success: false };
//   }
// };


// export const auth = async () => {
//   const cookiesStore = await cookies();
//   const token = cookiesStore.get("token")?.value;
//   if (!token) {
//     return {
//       success: false,
//     };
//     const { _id, success } = await decrypt(token);
//   }

//   if (!success) {
//     return {
//       suceess: false,
//     };
//   }
// };


// export const verifyUser = async () =>{

//   const { success, _id } = await auth();
//   if(!success){
//     return{
//       success:false
//     }
//   }

//   await dbConnect
//   const user = await UserModel.findById(_id)

//   if(!user) {
//     return {
//       success:false
//     }
//   }

//   return { success: true, user}
// }



