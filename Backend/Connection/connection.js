
const express = require('express');
const { Double } = require('mongodb');
const app = express();
var mongoose = require('mongoose');

const URL = 'mongodb+srv://kashyap1234:kashyap1234@cluster0.vgelwbe.mongodb.net/?retryWrites=true&w=majority';

const itemSchema = {
    name: String,
    price: String, 
    description: String,
    category: String,
};

const item = mongoose.model(
    "kashyap",
    itemSchema,
    "menuitem"
)
 
item.find({category: "pizza"}, (err, found)=>{
    if (err) {
        console.log(err)
        
    }else{
        console.log(found)
    }
})

mongoose.connect(URL)
.then(() => console.log("Connection successfull...."))
.catch((err) => console.log("Connectin Erooeeeeerr!!!!"));




//old code naiya

// const express = require('express');
// var mongoose = require('mongoose');

// const app = express()

// mongoose.connect("mongodb://0.0.0.0:27017/Restaurant")
// .then(() => console.log("Connection successfull...."))
// .catch((err) => console.log(err));






