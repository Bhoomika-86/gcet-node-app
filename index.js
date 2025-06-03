import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app=express()
app.listen(8080, () => {
    mongoose.connect("mongodb://localhost:27017");
    console.log("Server Started");
});

const userSchema = mongoose.Schema({
    name : { type: String },
    email : { type: String },
    pass : { type: String },

});

const user = mongoose.model("User", userSchema);
app.use(cors());
app.use(express.json())
app.get("/", async(req,res) => {
    return res.send("GOOD MORNING");
    
});
app.post("/register",async(req,res) => {
    const {name,email,pass}=req.body;
    const result = await user.insertOne({name, email, pass});//name:name etc
    return res.json(result);
});

app.post("/login", async(req,res)=> {
    const { email,pass } = req.body;
    const result= await user.findOne({ email,pass});
    if (!result) return res.json({message:"Invalid user or password"})
        return res.json(result);
});

app.post("/products",async(req,res) => {
    const {name,price}=req.body;
    const result = await user.insertOne({name, price});//name:name etc
    return res.json(result);
});


app.get("/greet",(req,res)=>{res.send("Greetings")})

app.get("/name",(req,res)=>{res.send("Bhoomika")})

app.get("/weather",(req,res)=>{res.send("31degress")})

app.get("/products", (req, res) => {
  const products = [
    { name: "Product-1", price: 34 },
    { name: "Product-2", price: 64 },
    { name: "Product-3", price: 45 },
  ];
  res.json(products);
});