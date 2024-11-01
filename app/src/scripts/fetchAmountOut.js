const axios = require('axios');
const getAmountOut = async (params) => {
    /**@DEVuse the 0x api to fetch token price  */
   
    const chainId = 8453
    //const apiKey = process.env.ZERO_X_API_KEY;

    const url =`https://api.0x.org/swap/permit2/price?chainId=${chainId}&sellToken=${params.sellTokenAddress}&buyToken=${params.buyTokenAddress}&sellAmount=${params.amountToSell}`;

    const options = {
        method: 'GET',
        headers: {
            '0x-version': 'v2',
            '0x-api-key': [`${process.env.ZERO_X_API_KEY}`]
        }
        };

        try{
            const resp = await axios.get(url,options);
            return resp.data;
        }catch(e){
            console.log("\nfetchAmount: ERROR FETCHIN AMOUNTOUT  from OX-API:\n",e);
        }
    }

module.exports =  getAmountOut;