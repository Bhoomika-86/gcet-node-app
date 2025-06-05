import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name : { type: String },
    email : { type: String },
    pass : { type: String },

});
//const user = mongoose.model("users", userSchema);//
export default mongoose.model("user",userSchema)