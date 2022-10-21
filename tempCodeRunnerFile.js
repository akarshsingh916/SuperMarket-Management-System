const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://akash:akash@cluster0.aszj5sl.mongodb.net/Sales", { useNewUrlParser: true}, {useUnifiedTopology: true})

// create a data schema

const notesSchema = {
    order_id: String,
    row_id: String,
    ship_mode: String,
    customer_id: String,
    customer_name: String,
    segment: String,
    country: String,
    city: String,
    state: String,
    postal_code: Number,
    region: String,
    product_id: String,
    category: String,
    sub_category: String,
    product_name: String,
    sales: Number
}

const Note = mongoose.model("Note", notesSchema);



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

// app.use("/", function(req, res){
//     res.sendFile(__dirname + "/stylesd.css")
// })



app.post("/", function(req, res){
    let newNote =new Note({
        order_id:req.body.order_id,
        row_id:req.body.row_id,
        ship_mode:req.body.ship_mode,
        customer_id:req.body.customer_id,
        customer_name:req.body.customer_name,
        segment:req.body.segment,
        country:req.body.country,
        city:req.body.city,
        state:req.body.state,
        postal_code:req.body.postal_code,
        region:req.body.region,
        product_id:req.body.product_id,
        category:req.body.category,
        sub_category:req.body.sub_category,
        product_name:req.body.product_name,
        sales:req.body.sales

    });
    newNote.save();
    res.redirect('/');
})


app.listen(3000, function() {
    console.log("server is running on 3000");
})