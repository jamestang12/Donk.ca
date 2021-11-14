const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')

//@desc    Get all items
//@route   GET /api/v1/items
//@access  Public
exports.getItems = asyncHandler(async (req, res,next) => {
    res.status(200).json({success: true, data: "Hello World"})
})
