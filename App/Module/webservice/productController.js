const productModel = require('../Products/model/productModel');
const productRepository = require('../Products/repository/productRepository');

class productController{
    async saveProduct(req,res){
        try{
            console.log("The Product details got from Postman: ",req.body);
            if(!req.body.productName){
                return res.status(401).json({
                    Success:false,
                    Message:"Product name is a required field"
                })
            }else if(!req.body.productPrice){
                return res.status(401).json({
                    Success:false,
                    Message:"Product price is a required field"
                })
            }else if(!req.body.productCategory){
                return res.status(401).json({
                    Success:false,
                    Message:"Product Category is a required field"
                })
            }else if(!req.body.productStock){
                return res.status(401).json({
                    Success:false,
                    Message:"Product Stock is a required field"
                })
            }else{
                let productData = new productModel({
                    productName:req.body.productName,
                    productPrice:req.body.productPrice,
                    productCategory:req.body.productCategory,
                    productStock:req.body.productStock

                });

                let saveProduct = await productRepository.save(productData);
                if(saveProduct){
                    console.log("The Product details are saved Successfully");

                    return res.status(200).json({
                        Success:true,
                        Message:'Your Product details are saved Successfully into the database'
                    })
                    
                }
            }
        }catch(error){
            console.log("Failed to save Products into the Database: ",error);

            return res.status(401).json({
                Success:false,
                Message:'Failed to Save Products into the Database: '+error
            })
            
        }
    }

    async listOfAllProducts(req,res){
        try{
            let allProducts = await productRepository.fetchAllProducts();
            console.log("The List of all Products: ",allProducts);
            return res.status(200).json({
                Success:true,
                Message:"List of all Products fetched From the Database: ",
                ListOfProducts: allProducts
            })
            
        }catch(error){
            console.log("failed to fetch all Products: ",error);
            return res.status(401).json({
                Success:false,
                Message:"Failed to Fetch List of Products from the database"
            })
            
        }
    }

    async low_Stock_Products(req,res){
        try{
            const low_stock_products = await productModel.find({ productStock: { $lt: 1 } });
            console.log("The Product details whose stock is less than 1: ",low_stock_products);
             
            if(low_stock_products){
                return res.status(200).json({
                    Success:true,
                    Message:'The Products whose stock is less than one are given Below: ',
                    Low_Stock_Products:low_stock_products
                })
                
            }
        }catch(error){
            console.log("Failed to find products whose stock is less than 1: ",error);
            return res.status(401).json({
                Success:false,
                Message:'Failed to find Products whose Stock is less than one: '+error
            })
            
        }
    }

    async editProduct(req,res){
        try{
            console.log("The updated product details Collected for edit: ",req.body);
            console.log("The Product id collected for edit: ",req.params.id);

            let existProductDetails = await productRepository.findProduct(req.params.id);
            console.log("The existing Product details that needs to be Updated: ",existProductDetails);

            // updating the Product details: 
            existProductDetails.productName = req.body.productName;
            existProductDetails.productPrice = req.body.productPrice;
            existProductDetails.productCategory = req.body.productCategory;
            existProductDetails.productStock = req.body.productStock;

            let saveUpdates = await productRepository.save(existProductDetails);

            if(saveUpdates){
                console.log("Your Product Details are Updated Successfully");

                return res.status(200).json({
                    Success:true,
                    Message:'Product details are Updated Successfully, just check Your Updated details given below: ',
                    Updated_Product: saveUpdates
                })
                
            }
        }catch(error){
            console.log("Failed to Update Product Details: ",error);

            return res.status(401).json({
                Success:false,
                Message:'Failed to Update Product details: '+error
            })
            
        }   
    }

    async deleteProduct(req,res){
        try{
            console.log("The Product id Collected for Deletion: ",req.params.id);

             await productRepository.delete(req.params.id);
            
            console.log("Your Product has been deleted Successfully");

                  return res.status(200).json({
                    Success:true,
                    Message:'Your Product has been Deleted Successfully',  
                   })   

        }catch(error){
            console.log("Failed to delete Product: ",error);
            return res.status(401).json({
                Success:false,
                Message:"failed to delete Product: "+error,
                
            })
            
        }
    }
}

module.exports = new productController();