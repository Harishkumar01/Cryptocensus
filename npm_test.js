import crypto from "./index.js";

crypto.getcoinprice("ETH").then(obj => { 
    console.log("ETH val: ") 
	console.log(obj)
}).catch(err => {
	console.log(err)
})

crypto.coinprice("ethereum","USD").then(obj => { 
    console.log("ETH value from coingecko: ", obj) 
}).catch(err => {
	console.log(err)
})

crypto.coinlist().then(obj => { 
    console.log("CoinList", obj) 
}).catch(err => {
	console.log(err)
})

crypto.getcoinvalues("usd").then(obj => { 
    console.log("market value", obj) 
}).catch(err => {
	console.log(err)
})

crypto.coinhistory("ethereum","10-10-2021").then(obj => { 
    console.log("CoinList", obj) 
}).catch(err => {
	console.log(err)
})