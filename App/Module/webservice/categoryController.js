const categoryModel = require('../Categories/model/categoryModel');
const categoryRepository = require('../Categories/repository/categoryRepository');


class categoryController{
    async addCategory(req,res){
        try{
            console.log("The Product category Details collected from post man: ",req.body);
            if(!req.body.category_Name){
                return res.status(401).json({
                    Success:false,
                    Message:"category_Name is a required field"
                })
            }else if(!req.body.category_Id){
                return res.status(401).json({
                    Success:false,
                    Message:"category_Id is a required field"
                })
            }else{
                let categoryData = new categoryModel({
                    category_Name:req.body.category_Name,
                    category_Id:req.body.category_Id
                });

                let saveCategory = await categoryRepository.save(categoryData);
                if(saveCategory){
                    console.log("The category details are Saved Successfully");
                    return res.status(200).json({
                        Success:true,
                        Message:"Category details are saved Successfully"
                    })
                    
                }
            }
        }catch(error){
            console.log("Failed to save category Details: ",error);

            return res.status(401).json({
                Success:false,
                Message:'failed to save Category details: '+error
            })
            
        }
    }

    async merge_ProductsWith_categories(req,res){
        try{
            let mergedDetails = await categoryModel.aggregate([
                {
                    $lookup:{
                        from:'products',
                        localField:'category_Id',
                        foreignField:'_id',
                        as:'allData'
                    }
                },
                {
                    $unwind:{
                        path:'$allData'
                    }
                },
                {
                    $project:{
                        createdAt:0,
                        updatedAt:0,
                        _id:0,
                        "allData.createdAt":0,
                        "allData.updatedAt":0,
                        "allData._id":0
    
                    }
                }
            ]);
            console.log("The Products are marged with their category details: ",mergedDetails);

            return res.status(200).json({
                Success:true,
                Message:"The Products are merged Successfully with its Categories",
                Merged_Data: mergedDetails
            })
            

        }catch(error){
            console.log("Failed to merge Products with Categories: ",error);
             return res.status(401).json({
                Success:false,
                Message:"Failed to merge Products with Category: "+error
             })  
        }

    }
}

module.exports = new categoryController();
