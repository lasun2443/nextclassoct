// import { model, models, Schema } from "mongoose";

// interface IUser {
//     email: string;
//     password: string;
//     fullname: string;
  
// }

// const UserSchema = new Schema<IUser>({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, select: false },
//     fullname: { type: String, required: true },
  
// });

// export default models.User || model<IUser>("User", UserSchema);

import { model, models, Schema } from "mongoose";

interface IUser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    select: false,
  },
  firstname: String,
  lastname: String,
});
const UserModel = models.User<IUser> || model("User", userSchema);
export default UserModel;

