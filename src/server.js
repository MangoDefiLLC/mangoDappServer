const express = require('express');
const bodyParser = require('body-parser');
const router = require('express').Router();
const{ethers}=require('ethers');
const cors = require("cors");
const axios = require('axios');
const getAmountOut = require('../src/scripts/fetchAmountOut.js')
//const getAmountOut = require("./scripts/fetchAmountOut")
require('dotenv').config();


// CORS configuration
const corsOptions = {
    origin: process.env.DAPP_URL ,//|| 'http://localhost:3000',  // Your frontend URL
    credentials: true,  // Allow credentials (cookies, etc.)
    optionSuccessStatus: 200  // Success status for older browsers
  };
  
// Initialize Express
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));


// Server listener
const PORT = process.env.SERVER_PORT || 3090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/getAmountsOut', async (req,res)=>{
    try{
        const params = req.query
        const priceInfo = await getAmountOut(params);

        console.log('resposne',priceInfo)
        
        res.status(200).json(priceInfo);
       
    } catch(e){
        console.log('server: /getAmountsOut route -> error',e)
    }
});
