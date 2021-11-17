const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const User = require('../models/user')



//@desc    Create user
//@route   Post /api/v1/users
//@access  Public
exports.getUserById = asyncHandler(async (req,res,next) => {

    res.status(200).json({success: true, data: "User route"})
})