const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    productStock:{
        type:Number,
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
});

const productModel = new mongoose.model('products',productSchema);
module.exports = productModel;