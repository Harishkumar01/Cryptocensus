import fetch from 'node-fetch'
let api = "http://api.coinlayer.com/live?access_key=e162a9f47e519469c6657b8390a349b5"

function getPrice() {
	return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getPrice.getcoinprice = ((crypto) => {
	return new Promise((done, err) => {
		if(typeof crypto === 'undefined') {
			err('You forgot to provide Crypto Currency Name')
		} else {
			fetch(api)
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

export default getPrice;