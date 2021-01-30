const express = require("express");

const router = express.Router();

//imported dbSales
const dbSales = require('../data/dbSales');


router.get('/', (req, res, next)=>{
    res.status(200).json({message: `Hello from root sales`})
})

router.post('/sell/:id', async (req, res, next)=>{

    const sellThis = await dbSales.sell(req.params.id)
    res.status(200).json({youWant2Sell: sellThis})
})


module.exports = router