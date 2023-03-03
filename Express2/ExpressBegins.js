const express= require("express");
const path=require("path");
const mongoose = require("mongoose");
// const bodyparser =require("bodyparser");
mongoose.connect('mongodb://127.0.0.1:27017/dancewebsitecontactform');

const contactSchema = new mongoose.Schema({
    name: String,
  number: Number,
  age: Number,
  email: String,
  location: String

  });

  const contactModel = mongoose.model('ContactCollection', contactSchema);

  
const app= express();
const fs= require("fs");

app.use("/static" , express.static("static") )
app.use(express.urlencoded());
app.get("/try", (req,res)=>{res.status(200).send("The is it")});

const port= 80;
const hostname= "127.0.0.1";

app.listen(port,hostname,()=>{console.log("listening at port");})

app.set("view engine", "pug");
      app.set("views", path.join(__dirname, "views"))
     app.get("/temp", (req,res)=>{res.status(200).render("index.pug")})
     app.get("/", (req,res)=>{res.status(200).render("dancewebsite.pug")})
     app.get("/contact", (req,res)=>{res.status(200).render("contact.pug")})
     app.post("/contact", (req,res)=>{
        //  console.log(req.body);
        
        var contactobj =new contactModel(req.body);

          contactobj.save();

        
        
        
        res.status(200).send("Your data has been recorded")})
    // app.post("/temp", (req,res)=>{
    //     console.log(req.body);
    // //    name= req.body.naam;
    // //     age=req.body.umra;
    // //     gender=req.body.mada;
        
    // //     about= req.body.about;

    //     // let Outputtowrite= `Your name is ${name} and your age is ${age} . Your Gender is ${gender} while you submit it ${about}`
    //     // fs.writeFileSync("output.text", Outputtowrite);
    //     res.status(200).render("index.pug")})

        