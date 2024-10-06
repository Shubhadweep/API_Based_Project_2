const express = require('express');
const router = express.Router();
const productController = require('../Module/webservice/productController');


router.post("/addProduct",productController.saveProduct);
router.get("/ListOfProducts",productController.listOfAllProducts);
router.post("/editProduct/:id",productController.editProduct)
router.post("/deleteProduct/:id",productController.deleteProduct);

//finding the Products whose Stock is less than 1 :
router.get("/lowStock",productController.low_Stock_Products);



module.exports = router;