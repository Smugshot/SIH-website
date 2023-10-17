const User = require('../model/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'navodaya'

const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body
    console.log(req.body);
    let existingUser;
    try {
        existingUser = await User.findOne({email: email})
    } catch (err) {
        console.log(err);
    }

    if(!existingUser){
        return res.status(400).json({
            message:"User not Exist"
        })
    }

    const isPwdCorrect = bcrypt.compareSync(password, existingUser.password)
    if(!isPwdCorrect){
        return res.status(400).json({
            message:"Invalid password"
        })
    }

    const token = jwt.sign({id:existingUser._id}, SECRET_KEY, {
        expiresIn:"1hr"
    })

    res.status(200).json({
        message:'Successfully logged in',
        user: existingUser.firstName,
        token:token,
        autenticated:true
    })
});


const verfiyToken = (req,res,next) => {
    const headers = req.headers['auhtorization']
    console.log('Token', headers);
    const token = headers === undefined ? '' : headers.split(" ")[1]

    if(!token){
        return res.status(400).json({
            message:"Token not found"
        })
    }

    jwt.verify(String(token), SECRET_KEY, (err,user) => {
        if(err) {
            console.log('error:', err);
            return res.status(400).json({
                message:"Invalid token"
            })
        }
        req.id = user.id
    })
    next();
}

exports.loginUser = loginUser;
exports.verfiyToken = verfiyToken   