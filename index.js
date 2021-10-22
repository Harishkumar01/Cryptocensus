import fetch from 'node-fetch'

let coinlayerapi = "http://api.coinlayer.com/live?access_key=e162a9f47e519469c6657b8390a349b5"

let coingeckoapi = `https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`

let coingeckoapilist = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"


function cryptoData() {
	return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

cryptoData.getcoinprice = ((crypto) => {
	return new Promise((done, err) => {
		if(typeof crypto === 'undefined') {
			err('You forgot to provide Crypto Currency Name')
		} else {
			fetch(coinlayerapi)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json.rates[crypto]))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

cryptoData.getcoinvalues = ((price_type) => {
	return new Promise((done, err) => {
		if(typeof price_type === 'undefined') {
			err('You forgot to provide Price Type')
		} else {
			fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${price_type}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

cryptoData.coinprice = ((crypto,currency) => {
	return new Promise((done, err) => {
		if(typeof crypto === 'undefined' && typeof currency === 'undefined') {
			err('You forgot to provide Crypto Currency Name')
		} else {
			fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

cryptoData.coinhistory = ((crypto,date) => {
	return new Promise((done, err) => {
		if(typeof crypto === 'undefined' && typeof date === 'undefined') {
			err('You forgot to provide Crypto Currency Name')
		} else {
			fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/history?date=${date}&localization=false`)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

cryptoData.coinlist = (() => {
	return new Promise((done, err) => {
			fetch(coingeckoapilist)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json))
				.catch(error => console.error(`Sorry, We couldn't get the List. Error: ` + error))
	})
})

export default cryptoData;