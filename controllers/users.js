const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const User = require('../models/user')



//@desc    Get user by id
//@route   Post /api/v1/users/:id
//@access  Public
exports.getUserById = asyncHandler(async (req,res,next) => {
    const user = await User.findById(req.params.id).select('-cardCareNumber');

    res.status(200).json({success: true, data: user})
})
