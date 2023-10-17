const express = require('express')
const router = express.Router();

router.route('/', (req,res) => {
    res.status(401).send({ message:"I am alive!!!"})
})

module.exports = router;