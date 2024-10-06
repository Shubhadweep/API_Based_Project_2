const express = require('express');
const router = express.Router();

const categoryController = require('../Module/webservice/categoryController');

router.post("/addCategory",categoryController.addCategory);
router.get("/mergeProducts_withCategory",categoryController.merge_ProductsWith_categories);


module.exports = router;