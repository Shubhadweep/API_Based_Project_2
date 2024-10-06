const productModel = require('../model/productModel');

class productRepository{
    async save(data){
        try{
            let saveProduct = await productModel.create(data);
            return saveProduct;

        }catch(error){
            console.log("Failed to save Product details: ",error);
            
        }
    }

    async fetchAllProducts(){
        try{
            let allProducts = await productModel.find({});
            console.log("All Product details fetched from the database: ",allProducts);
            return allProducts;
            
        }catch(error){
            console.log("Failed to fetch all Product detaills from the Database: ",error);
            
        }
    }

    async findProduct(id){
        try{
            let productDetails = productModel.findOne({_id:id});
            return productDetails;
        }catch(error){
            console.log("Failed to fetch Product Details: ",error);
            
        }
    }

    async delete(id){
        try{
            let deleted = await productModel.findOneAndDelete({_id:id});
            if(deleted){
                console.log("The Product deletion process is Successfull");
                
            }
        }catch(error){
            console.log("Error in Product Deletion");
            
        }
        

    }
}


module.exports = new productRepository();