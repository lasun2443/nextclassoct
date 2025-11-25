import Product from "../models/Product";
import dbConnect from "../utils/mongoose";

export async function getMongoProducts() {
  await dbConnect();
  const products = await Product.find({});
  return JSON.parse(JSON.stringify(products));
}
