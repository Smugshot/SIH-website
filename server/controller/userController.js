// const User = require("../model/User")
// const asyncHandler = require('express-async-handler')
// const bcrypt = require('bcrypt')
// const { response } = require('express')

// const getAllUsers = asyncHandler(async(req,res) => {
//     const users = await User.find().select('-password').lean()
//     if (!users) {
//         return res.status(400).json({ message: 'No users found' })
//     }
//     res.json(users)
// });

// const createNewUser = asyncHandler(async(req,res) => {
//     const {firstName, lastName , mobile , email , passWord} = req.body
//     // checking for confirm data
//     if( !firstName || !lastName || !mobile || !email || !passWord ){
//         return res.status(400).json({message:"All field required"})
//     }

//     //Checking for dulplicates 
//     const duplicate = await User.findOne({email}).lean().exec
//     if(duplicate){
//         return res.status(409).json({message:"Duplicate username"})
//     }

//     //Hashed password || doing encryptoin of password
//     const hashedPwd = await bcrypt.hash(passWord , 18)
//     const userObject = {email, "passWord":hashedPwd,firstName,lastName,mobile}

//     //Creating and storeing new user 
//     const user = await User.create(userObject)
//     if(user){
//         return res.status(201).json({message:`new user ${email} created and stored`})
//     }else{
//         return res.status(400).json({message:"Invalid user data received"})
//     }
// })


// const updateUser = asyncHandler(async (req,res) => {
//     const { email, id , firstName, mobile, lastName, password} = req.body
    
//     //Confirm data
//     if( !firstName || !lastName || !mobile || !email || !password || !id ){
//         return res.status(400).json({message:"All Field are required"})
//     }

//     const user = await User.findById(id).exec()
//     if(!user){
//         return res.status(400).json({message:"User not founded"})
//     }
//     //Check for duplicates
//     const duplicate = await User.findOne({email}).lean().exec()
//      // Allow updates to the original user
//      if (duplicate && duplicate?._id.toString() !== id) {
//         return res.status(409).json({ message: 'Duplicate username' })
//     }

//     user.email = email
//     // user.roles = roles
//     user.active = active
//     user.firstName = firstName
//     user.lastName = lastName
//     user.mobile = mobile
//     if(password){
//         user.passWord = await bcrypt.hash(password,18)//salt round
//     }
//     //final unpdation of user data

//     const updateUser = await user.save()
//     res.status(200).json(`${updateUser.email} updated`)
// })


// const deleteUser = asyncHandler(async(req,res) => {
//     const { id } = req.body

//     if(!id){
//         return res.status(400).json({message:`User ID is required`})
//     }

//     const user = await User.findById(id).exec()

//     if(!user){
//         return res.status(400).json({message:`User ID not founded`})
//     }

//     const result = await User.deleteOne()
//     const reply = `Username ${result.email} with ID ${result.id} deleted succesfully`
// })

// module.exports = {
//     getAllUsers,
//     createNewUser,
//     updateUser,
//     deleteUser
// }

const User = require('../model/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const { response } = require('express');

// @get all users
// @route GET / users
// Access Private

const getAllUsers = asyncHandler(async (req, res) => {
    const {password} = req.body
    const users = await User.find().select(password).lean()
    // const users = await User.find().select('-password').lean()
    if (!users) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users,console.log(`Response succesfully requested for ${users}`))
});

const createNewUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, mobile, email, password, roles } = req.body
    const updateRoles = [roles]
    // console.log(updateRoles, "received");
    
    // Confirm data
    if (!firstName || !lastName || !mobile || !email || !password || !Array.isArray(updateRoles) || !updateRoles.length) {
        return res.status(400).json({ message: 'All fileds are required' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hashed password
    const hashedPwd = await bcrypt.hash(password, 18);
    console.log(updateRoles, "received");
    const userObject = { email, "password": hashedPwd, updateRoles, firstName, lastName, mobile };

    // Create and store new user
    const user = await User.create(userObject);
    console.log('i think user is creating');
    if (user) {
        return res.status(201).json({ message: `New user ${email} created` })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const { email, id, roles, firstName, mobile, lastName, password, active } = req.body
    // Confirm data
    if (!id || !firstName || !lastName || !email || !mobile || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fileds are required' })
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
        // Allow updates to the original user
        if (duplicate && duplicate?._id.toString() !== id) {
            return res.status(409).json({ message: 'Duplicate username' })
        }

        user.email = email
        user.roles = roles
        user.active = active
        user.firstName = firstName
        user.lastName = lastName
        user.mobile = mobile

        if (password) {
            user.password = await bcrypt.hash(password, 18); // Salt Rounds
        }

        const updateUser = await user.save();
        res.json({ message: `${updateUser.email} updated` })
    }

});

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await User.deleteOne();
    const reply = `Username ${result.email} with ID ${result.id} deleted successfully`;

});

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}