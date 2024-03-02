// Function to fetch Bitcoin price in USD
async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;
        return bitcoinPrice;
    } catch (error) {
        console.log('Error fetching Bitcoin price:', error);
    }
}

// Call the function to fetch Bitcoin price and display it
fetchBitcoinPrice()
    .then(price => {
        console.log('Current Bitcoin price in USD:', price);
    })
    .catch(error => {
        console.log('Error:', error);
    });
