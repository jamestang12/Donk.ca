const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Item = require('../models/Item')

//@desc    Get all items
//@route   GET /api/v1/items
//@access  Public
exports.getItems = asyncHandler(async (req, res,next) => {
    res.status(200).json({success: true, data: "Hello World"})
})

//@desc    Create items
//@route   Post /api/v1/items
//@access  Private
exports.createItem = asyncHandler(async (req, res,next) => {
    
    console.log(req.body)
    // const result = await Item.create(req.body);
    // console.log(result)
    res.status(200).json({success: true, data: "result"})
})

//@desc    Create items
//@route   Post /api/v1/items/image
//@access  Private
exports.uploadImageForCreateItem = asyncHandler(async (req, res,next) => {
    
    console.log(req.body)
    // const result = await Item.create(req.body);
    // console.log(result)
    res.status(200).json({success: true, data: "result"})
})

