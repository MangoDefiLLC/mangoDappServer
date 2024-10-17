const getAmountOut = async () => {
    console.log('brr')
    /**@DEV on blur will use the 0x api to fetch token price  */
    if(amount1 !== 0 && selectedToken1 !== "" && selectedToken2!== ""){
        
      
        const chainId = 8453
        const sellToken = 'selectedToken1.address';
        const buyToken = 'selectedToken2.address';
        const sellAmount = '1000000000000000000';
        //const apiKey = process.env.ZERO_X_API_KEY;

        const url = `https://api.0x.org/swap/permit2/price?chainId=${chainId}&sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${sellAmount}`;

        const options = {
            method: 'GET',
            headers: {
                '0x-api-key': '4e9e7dbc-c91a-4e75-9f76-3dad20902ba4',
                '0x-version': 'v2'
            }
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            }
}

exports.default =  getAmountOut;