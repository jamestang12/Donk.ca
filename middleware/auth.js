const jwt = require('jsonwebtoken')
const asyncHandler = require('./async');
const User = require('../models/user');

//Protect routes
exports.protect = asyncHandler(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }else if(req.cookies.token){
         token = req.cookies.token
    }

    //Make sure token exists
    if(!token){
        res.status(401).json({success: false, data: "Not authorized to access this route"})
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch{
        res.status(401).json({success: false, data: "Not authorized to access this route"})
    }

})