const express = require('express');
const bodyParser = require('body-parser');
const router = require('express').Router();
const{ethers}=require('ethers');
const cors = require("cors");
const axios = require('axios');
//const getAmountOut = require("./scripts/fetchAmountOut")
require('dotenv').config();


// CORS configuration
const corsOptions = {
    origin: `${process.env.SERVER_URL}`,  // Your frontend URL
    credentials: true,  // Allow credentials (cookies, etc.)
    optionSuccessStatus: 200  // Success status for older browsers
  };
  
// Initialize Express
const app = express();
const port = process.env.PORT;//http://localhost:4000/

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));


// Server listener
const PORT = process.env.SERVER_PORT || 3090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const getAmountOut = async () => {
    /**@DEVuse the 0x api to fetch token price  */
   
    const chainId = 8453
    //const apiKey = process.env.ZERO_X_API_KEY;

    const url ='https://api.0x.org/swap/permit2/price?chainId=1&sellToken=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&buyToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&sellAmount=1000000000000000000';

    const options = {
        method: 'GET',
        headers: {
            '0x-version': 'v2',
            '0x-api-key': `${process.env.ZERO_X_API_KEY}`
        }
        };

        try{
            const resp = await axios.get(url,options);
            return resp.data;

        }catch(e){
            console.log("server.js-> ERROR FETCHIN AMOUNTOUT  OXAPI:\n",e);
        }
    }


app.post('/getAmountsOut', async (req,res)=>{
    try{
        const priceInfo = await getAmountOut();
        console.log(priceInfo);
        
        res.send({status:200,priceInfo});

    } catch(e){
        console.log(e)
    }
});
