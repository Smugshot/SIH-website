const useMiddleware = (req,res,next) => {
    let bodydata = req.query.age;
    console.log(`The age is ${bodydata}`);
    if (!bodydata) {
        res.send(`Wowww your age is ${bodydata} you are eligible For getting a Free GIFT`)
    } else if (bodydata < 18) {
        res.send(`Your age is ${bodydata} go watch POGO`)   
    } else {
        next()
    }
}  

module.exports  = useMiddleware