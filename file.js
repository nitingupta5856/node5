

const express =require("express");

const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/',(req,res,next)=>{
//     console.log("this always run");
//     next();
    
//     })
    app.use('/add-product',(req,res,next)=>{
        // console.log("in another middleware");
        // res.send("app product page")
        res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">Add product</button></form>')
       
        
        })
        app.use('/product',(req,res,next)=>{
            console.log(req.body);
            
            res.redirect('/')
           
            })

        app.use('/',(req,res,next)=>{
            // console.log("in another middleware");
            res.send("<h1>express js</h1>")
           
            })


app.listen(4000);
