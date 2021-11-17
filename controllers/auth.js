const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const User = require('../models/user')

//@desc    Register user
//@route   Post /api/v1/auth/register
//@access  Public
exports.registerUser = asyncHandler(async (req,res,next) => {

    const {username,name, phoneNumber, accountBiography, address, email, password} = req.body;

    // Craete user
    const user = await User.create({
        name,
        phoneNumber,
        accountBiography,
        address,
        email,
        password,
        username
    })

    sendTokenRosponse(user, 200, res)

})

//@desc    Login user
//@route   POST /api/v1/auth/login
//@access  Public
exports.loginUser = asyncHandler(async (req,res,next) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).json({success: false, data: "Please provid an email and password"})
    }

    const user = await User.findOne({email}).select('+password');

    if(!user){
        res.status(401).json({success: false, data: "Invalid credentials"})
    }

    const isMatch = await user.matchPassword(password);
    if(!isMatch){
        return res.status(401).json({success: false, data: "Invalid credentials"})
    }

    sendTokenRosponse(user, 200, res)

})

const sendTokenRosponse = (user, statusCode,res) => {
    const token = user.getSignedJwtToken();
    const options = {}

    if(process.env.NODE_ENV === 'production'){
        options.secure = true;
    }
    res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
        success: true,
        data: token
    });
}