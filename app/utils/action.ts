// "use server"

// import { revalidatePath } from "next/cache";
// // import dbconnect from "./dbConnect";
// import ProductModel from "../models/product";
// import dbConnect from "./dbConnect";
// import UserModel from "../models/user";
// import bcrypt from "bcrypt";
// import { User } from "lucide-react";



  

// export const addProduct = async (form: { title: string; description: string; price: string; image: string }) => {
 
 
//     try {
//         await dbConnect()
//         const postData = { title: form.title, price: form.price }
//         await ProductModel.create(postData)

//         console.log(postData);
//         revalidatePath("/admin/products")
//         return { ...postData, success: true }
//     } catch (error) {
//         return { success: false, message: 'Something went wrong' }
//     }

//     console.log({ title: form.title,
//          description: form.description,
//          price: parseFloat(form.price),
//          image: form.image
//          });

    
//     try {
//         await dbConnect()
//         const existingTitle = await ProductModel.findOne({ title: form.title })

//         if (existingTitle) {
//             return {
//                 success: false,
//                 message: 'Product already exists'
//             }
//         }

//         const postData = { title: form.title, price: form.price }
//         await ProductModel.create(postData)
//         revalidatePath("/admin/products")
//         return { ...postData, success: true, exist: true }
//     } catch (error) {
//         return { success: false, exist: false, message: 'Something went wrong' }
//     }

// }



// export interface productType {
//     id:string
//     image: string
//     price: number
//     title: string

// }

// // export const handleSignIn = await (User)


// export const signUp = async (UserData: {
//     Fullname: string;
//     email: string;
//     password: string;
// }) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(UserData.password, salt);
//         UserData.password = hashedPassword;
//         const result = await UserModel.create(UserData);
//         if(!result){
//             return { success: false, message: 'User already exists' }
//         }
//     } catch (error) {
//         return { success: false, message: 'Something went wrong' }
//     }
// };

// export const signIn = async (UserData: {
//     email: string;
//     password: string;
// }) => {
   
//         const user = await UserModel.findOne({ email: UserData.email });
//         if (!user) {
//             return { success: false, message: 'User not found' };
//         }
//         const isPasswordValid = await bcrypt.compare(UserData.password, user.password);
//         if (!isPasswordValid) {
//             return { success: false, message: 'Invalid password' };
//         }
//         return { success: true, message: 'Sign in successful' };
// }




// "use server"

// import { refresh, revalidatePath } from "next/cache";
// import dbConnect from "./dbConnect";
// import ProductModel from "../models/product";
// import { MongooseError } from "mongoose";
// import UserModel from "../models/user";
// import * as bcrypt from "bcrypt";
// import { encrypt } from "./session";
// import { cookies } from "next/headers";
// import product from "../models/product";

// export const addProduct = async (form: { title: string, price: string }) => {
// try {
//     await dbConnect();
//      const post = {
//          title: form.title,
//          price: form.price
//      }
//      const isExisting = await ProductModel.findOne({ title: form.title })
//      if (isExisting) {
//          return {
//              success: false,
//              message: `A product with the title "${form.title}" already exists.`,
//          };
//      }
//     const addProductData = { title: form.title, price: form.price }
//     await ProductModel.create({ title: form.title, price: form.price })


//     console.log({
//         title: form.title,
//         price: parseFloat(form.price)
//     });

//     // refresh();
//     revalidatePath("/admin/products")
//     return{...addProductData,success:true}
// } catch (error) {
//     if (error instanceof MongooseError && (error as any).code === 11000) {
//         return {
//             success: false,
//             message: `A product with the title "${form.title}" already exists.`,
//         };
//     }
//     return {success:false, message:"Something went wrong"}
// }
// }

// export const signUp = async (UserData: {
// email: string;
//  password: string;
//  firstname: string;
//  lastname: string;
// }) => {
//     try{
//         const salt = await bcrypt.genSaltSync(10);
//         const hashedPassword = await bcrypt.hash(UserData.password, salt);
//         UserData.password = hashedPassword;
//         await dbConnect();
//         const result = await UserModel.create(UserData);
//         if(!result){
//             return {success:false, message:"An Error came up"}
//     }
//     return {success:true, message:"Succesfully signed up"}
//     }catch(error){
//         return {success:false, message:"Error Signing up"}
//     }
// }

// export const signIn = async (userData:{ email:string, password:string}) => {
//     await dbConnect();
//     const user = await UserModel.findOne({email:userData.email}).select("+password");
//     if (!user){
//         return {success:false, message:"Invalid Credentials"}
//     }
//     const validPassword = await bcrypt.compare(userData.password, user.password);
//     if(!validPassword){
//         return {success:false, message:"Invalid Credentials"}
//     }

//     const cookieStore = await cookies();
//     const token = await encrypt({ _id: user._id });
//     cookieStore.set("token", token, {
//         httpOnly: true,
//       secure: true,
//       sameSite: "lax",
//       path: "/",
//       expires: new Date(Date.now() + 7 * 24 * 60 * 1000),

//     });

//     console.log(token);

//     return { success: true, message: "User logged in" };

    
// }

// export const login = async (email:string, password:string) => {
//     try{
//         await dbConnect();
//         const user = await UserModel.findOne({email});
//         if(!user){
//             return {success:false, message:"User not found"}
//         }
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if(!isPasswordValid){
//             return {success:false, message:"Incorrect Password "}
//         }
//         return {success:true, message:"User logged in"}
//     }catch(error){
//         return {success:false, message:"An error came up"}
//     }
// }



// "use server"
// export const addProduct = async (form: FormData) => {
//     const title = form.get("title") as string
//     const price = form.get("price") as string
//     console.log({
//         title,
//         price: parseFloat(price)
//     });

// }



"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "./dbConnect";
import ProductModel from "../models/product";
import { decrypt, encrypt } from "./session";
import { cookies } from "next/headers";
import UserModel from "../models/user";
import * as bcrypt from "bcrypt";
import { JWTPayload, jwtVerify } from "jose";


export const addProduct = async (form: { title: string; price: string; image: string; description?: string }) => {
    try {
        await dbConnect();
        const addProductData = {
            title: form.title,
            price: parseFloat(form.price),
            image: form.image,
            description: form.description
        }
        await ProductModel.create(addProductData);

        revalidatePath("/admin/products")
        return { success: true, data: addProductData }
    } catch (error) {
        console.error("Error adding product:", error);
        return { success: false, error: "Failed to add product" }
    }
}

export const getProducts = async () => {
    try {
        await dbConnect();
        const products = await ProductModel.find({}).sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(products));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export const getProduct = async (id: string) => {
    try {

        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return null;
        }

        await dbConnect();
        const product = await ProductModel.findById(id).lean();
        return product ? JSON.parse(JSON.stringify(product)) : null;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export const deleteProduct = async (id: string) => {
    try {
        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return { success: false, error: "Invalid product ID" };
        }

        await dbConnect();
        await ProductModel.findByIdAndDelete(id);
        revalidatePath("/admin/products");
        return { success: true };
    } catch (error) {
        console.error("Error deleting product:", error);
        return { success: false, error: "Failed to delete product" };
    }
}

// Update Product
export const updateProduct = async (id: string, form: { title: string; price: string; image: string; description?: string }) => {
    try {
        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
            return { success: false, error: "Invalid product ID" };
        }

        await dbConnect();
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            {
                title: form.title,
                price: parseFloat(form.price),
                image: form.image,
                description: form.description
            },
            { new: true, runValidators: true }
        ).lean();

        if (!updatedProduct) {
            return { success: false, error: "Product not found" };
        }

        revalidatePath("/admin/products");
        return {
            success: true,
            product: JSON.parse(JSON.stringify(updatedProduct))
        };
    } catch (error) {
        console.error("Error updating product:", error);
        return { success: false, error: "Failed to update product" };
    }
}

export const registerUser = async (form: {
    name: string;
    email: string;
    phone: string;
    course: string;
    message: string
}) => {

    try {

        if (!form.name || !form.email || !form.course) {
            return { success: false, error: 'Missing required fields' };
        }


        return { success: true, message: 'Registration successful' };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: 'Failed to process registration' };
    }
};


export const signUp = async (UserData: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}) => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(UserData.password, salt);
        UserData.password = hashedPassword;
        await dbConnect();
        const result = await UserModel.create(UserData);
        if (!result) {
            return { success: false, message: "I no wetin happen" }
        }
        return { success: true, message: "Successfull" }
    } catch (error) {
        return { success: false, message: "Something sup ni" }
    }
}

export const signIn = async (userData: { email: string, password: string }) => {
    await dbConnect();
    const user = await UserModel.findOne({ email: userData.email }).select("+password");

    if (!user) {
        return { success: false, message: "Invalid Credentials" }
    }

    const validPassword = await bcrypt.compare(userData.password, user.password);
    if (!validPassword) {
        return { success: false, message: "Invalid Credentials" }
    }

    const cookieStore = await cookies();

    const token = await encrypt({ _id: user._id.toString() });

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/profile",
        maxAge: 7 * 24 * 60 * 60, 
    });

    return { success: true, message: "User logged in" }
}

export const login = async (email: string, password: string) => {
    try {
        await dbConnect();
        const user = await UserModel.findOne({ email });
        if (!user) {
            return { success: false, message: "User not found" }
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { success: false, message: "Incoreect password or Email" }
        }
        return { success: true, message: "User logged in" }
    } catch (error) {
        return { success: false, message: "Invalid credential" }
    }
}

interface MyPayload extends JWTPayload {
    _id?: string;
}

export const getCurrentUser = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return { success: false, message: "Not authenticated" };
        }

        const decoded = await decrypt(token);
        if (!decoded.success) {
            return { success: false, message: "Invalid token" };
        }

        await dbConnect();

        const user = await UserModel.findById(decoded._id).select('-password');

        if (!user) {
            return { success: false, message: "User not found" };
        }

        const userObject = user.toObject ? user.toObject() : user;

        return {
            success: true,
            user: {
                _id: userObject._id.toString(), 
                firstname: userObject.firstname,
                lastname: userObject.lastname,
                email: userObject.email
            }
        };
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        return { success: false, message: "Something went wrong" };
    }
}



export const updateProfile = async (userData: {
    firstname: string;
    lastname: string;
    email: string;
}) => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return { success: false, message: "Not authenticated" };
        }

        const decoded = await decrypt(token);

        if (!decoded.success || !decoded._id) {
            return { success: false, message: "Invalid token" };
        }

        await dbConnect();

        if (userData.email) {
            const existingUser = await UserModel.findOne({
                email: userData.email,
                _id: { $ne: decoded._id } 
            });

            if (existingUser) {
                return { success: false, message: "Email already exists" };
            }
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            decoded._id, 
            {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            },
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return { success: false, message: "User not found" };
        }

        const userObject = updatedUser.toObject ? updatedUser.toObject() : updatedUser;

        return {
            success: true,
            message: "Profile updated successfully",
            user: {
                _id: userObject._id.toString(),
                firstname: userObject.firstname,
                lastname: userObject.lastname,
                email: userObject.email
            }
        };
    } catch (error) {
        console.error("Update profile error:", error);
        return { success: false, message: "Something went wrong" };
    }
}

export const logout = async () => {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('token');
        return { success: true, message: "Logged out successfully" };
    } catch (error) {
        return { success: false, message: "Something went wrong" };
    }
}