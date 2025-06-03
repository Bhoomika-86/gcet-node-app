import express from 'express'
const app=express()
app.listen(8080, () => {
    console.log("Server Started");
});

app.get("/", (req,res) => {
    return res.send("GOOD MORNING");
    
});

app.get("/greet",(req,res)=>{res.send("Greetings")})

app.get("/name",(req,res)=>{res.send("Bhoomika")})

app.get("/weather",(req,res)=>{res.send("31degress")})

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});