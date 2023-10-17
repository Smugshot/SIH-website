// require('dotenv').config()
// const express = require('express');
// const cors = require("cors");
// const mongoose = require('mongoose');
// const connectDB = require('./connection/config')
// require('./controller/userController')
// // const User = require('./connection/user')
// // const path = require("path")
// // const user = require('./connection/user');
// // const useMiddleware = require('./middleware/useMiddleware');
// // const publicPath = path.join(__dirname, "public")
// // const route = express.Router()
// const PORT = process.env.PORT || 8989

// const app = express();
// connectDB();

// // route.use(useMiddleware)
// app.use(express.json());
// app.use(cors());

// app.use(require('./routes/index'));
// app.use('/users', require('./routes/userRoute'));

// mongoose.connection.once('open', () => {
//     console.log('Connected to Mongoose');
//     app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
// })

// mongoose.connection.on('error', (err) => console.log("Is COMING 254534353543215146543"))


// Chacha code
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./connection/config')
const PORT = process.env.PORT || 8080;
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/userRoute'));
app.use('/login',require('./routes/loginRoute'))

mongoose.connection.once('open', () => {
    console.log('Connected to Mongoose');
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
})

mongoose.connection.on('error', (err) => console.log(err))




// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

// app.use('/', route)

// const useMiddleware = (req,res,next) => {
//     let bodydata = req.query.age;
//     console.log(`The age is ${bodydata}`);
//     if (bodydata > 18) {
//         res.send(`Wowww your age is ${bodydata} you are eligible For getting a Free GIFT`)
//     } else if (bodydata < 18) {
//         res.send(`Your age is ${bodydata} go watch POGO`)   
//     } else{
//         next()
//     } 
// }

// const port = 5000 
// app.get('/user', async (req,res) => {
//     const user = new User(req.body);
//     const result = await user.save()
//     res.send(result);
//     console.log("result", result);
//     console.log(user);
// })

// app.get("/", useMiddleware , (_,res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// route.get("/about", (_,res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get("/service", (_,res) => {
//     res.sendFile(`${publicPath}/service.html`)
// })
// app.get("*", (_,res) => {
//     res.sendFile(`${publicPath}/404page.html`)
// })
