import mongoose from 'mongoose'
const productsSchema = mongoose.Schema({
    name : { type : String},
    price : { type : Number},
});

//const user = mongoose.model("products", productsSchema);
export default mongoose.model("product",productsSchema)