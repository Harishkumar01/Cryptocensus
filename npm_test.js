import crypto from "./index.js";

crypto.getcoinprice("ETH").then(obj => {  
	console.log(obj)
}).catch(err => {
	console.log(err)
})